/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import "../components/reset.css";
import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";
import {
  AboutSection,
  WritingSection,
  PortfolioSection,
} from "../IndexPageSections";

const IndexPage = () => (
  <React.Fragment>
    <div sx={{ width: "100vw", height: 50, position: "fixed", top:0, left:0 }}>
      Nav Bar

    </div>
    <Container>
      <AboutSection />
      <WritingSection />
      <PortfolioSection />
    </Container>
  </React.Fragment>
);

export default IndexPage;
