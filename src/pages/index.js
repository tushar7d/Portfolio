/** @jsx jsx */
import { jsx } from "theme-ui";
import "../components/reset.css";
import Container from "../components/Container";
import {AboutSection, WritingSection, PortfolioSection} from "../IndexPageSections";

const IndexPage = () => (
  <Container>
    <AboutSection />
    <WritingSection />
    <PortfolioSection /> 
  </Container>
);

export default IndexPage;
