import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container bg="dark" data-bs-theme="dark">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiaryborder border-dark rounded mt-3"
      >
        <Container>
          <Navbar.Brand href="#">
            <h2 className=" text-light">Project Manager</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
export default Header;
