import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="py-2">
        <Navbar.Brand href="#home">SMK NUSANTARA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Copyright Allright reserved 2023</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
