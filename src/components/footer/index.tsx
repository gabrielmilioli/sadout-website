import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../logo";

export default function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
