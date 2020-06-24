/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Container from "../components/Container";
import {
  AboutSection,
  WritingSection,
  PortfolioSection,
} from "../IndexPageSections";
import SectionContainer from "../components/SectionContainer";

import TwoColumnGrid from '../components/TwoColumnGrid';

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
      <TwoColumnGrid
      >
        <WritingSection />
        <PortfolioSection />
      </TwoColumnGrid>
    </Container>
  </React.Fragment>
);

export default IndexPage;
