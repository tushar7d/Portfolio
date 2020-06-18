/** @jsx jsx */
import { jsx } from "theme-ui";
import "../components/reset.css";
import Container from "../components/Container";
import AboutSection from "../IndexPageSections/AboutSection";

const IndexPage = () => (
  <Container>
    <AboutSection />
  </Container>
);

export default IndexPage;
