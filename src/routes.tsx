import { Container } from "react-bootstrap";
import { Routes as RoutesDom, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Media from "./pages/media";
import Schedule from "./pages/schedule";

export default function Routes() {
  return (
    <>
      <Header />
      <Container>
        <RoutesDom>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </RoutesDom>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
