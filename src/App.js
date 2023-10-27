import "./App.css";
import Header from "./components/Navbar";
import ProjectManager from "./components/ProjectManager";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectManager />
    </div>
  );
}

export default App;
