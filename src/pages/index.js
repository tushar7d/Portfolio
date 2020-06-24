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

import Grid from '../components/Grid';

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
      
      {/**
       * 
       * <PortfolioSection />
       *<WritingSection />
       */}
        
      
        
    
    </Container>
  </React.Fragment>
);

export default IndexPage;
