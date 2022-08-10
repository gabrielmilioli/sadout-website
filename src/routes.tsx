import { Container } from "react-bootstrap";
import { Routes as RoutesDom, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Media from "./pages/media";

export default function Routes() {
  return (
    <>
      <Header />
      <Container>
        <RoutesDom>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </RoutesDom>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
