import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Container, ListGroup } from "react-bootstrap";
import { deleteDoc, doc } from "firebase/firestore";
import { AiFillDelete } from "react-icons/ai";
import AlertModal from "./AlertModal";

function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const newProjects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setProjects(newProjects);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async () => {
    if (newProject) {
      try {
        const docRef = await addDoc(collection(db, "projects"), {
          name: newProject,
          timestamp: new Date(),
        });
        console.log("Project added with ID: ", docRef.id);
        setNewProject("");
        setAlertTitle("Success");
        setAlertMessage("Project added successfully.");
        setShowAlert(true);
        window.location.reload(); // Reload the page when a project is added
      } catch (error) {
        console.error("Error adding project: ", error);
      }
    }
  };

  const deleteProject = async (projectId) => {
    try {
      // Use Firestore API to delete the project
      // For example, using `deleteDoc` from Firebase
      // Replace 'projects' with the actual collection name
      await deleteDoc(doc(db, "projects", projectId));

      // After deletion, refresh the project list
      fetchProjects();
      setAlertTitle("Success");
      setAlertMessage("Project deleted successfully.");
      setShowAlert(true);
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-content-center">
        <div className="d-flex justify-content-evenly px-5">
          <input
            className="form-control p-2 my-2 mt-3 mx-auto w-50 h-25"
            type="text"
            placeholder="New Project"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mb-2" onClick={addProject}>
          Add Project
        </button>
      </div>
      <Container>
        <ListGroup>
          {projects.map((project) => (
            <ListGroup.Item key={project.id}>
              <h4>{project.data.name}</h4>
              <p>
                Created at: {project.data.timestamp.toDate().toLocaleString()}
              </p>
              <div>
                {project.data.Tags.map((tag, index) => (
                  <span key={index} className="badge bg-info me-2">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => deleteProject(project.id)}
                aria-label="Delete"
              >
                <AiFillDelete />
              </button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <AlertModal
        show={showAlert}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setShowAlert(false)}
      />
    </div>
  );
}

export default ProjectManager;
