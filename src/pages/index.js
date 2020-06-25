/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Container from "../components/Container";
import {
  AboutSection,
  WritingSection,
  PortfolioSection,
  FigmaPlugin,
} from "../IndexPageSections";
import SectionContainer from "../components/SectionContainer";

const IndexPage = () => (
  <React.Fragment>
    <div
      sx={{ width: "100vw", height: 50, position: "fixed", top: 0, left: 0 }}
    >
      <Container>
        <SectionContainer>TD</SectionContainer>
      </Container>
    </div>
    <Container>
      <AboutSection />
      <WritingSection />
      <FigmaPlugin />
      <PortfolioSection />
    </Container>
  </React.Fragment>
);

export default IndexPage;
