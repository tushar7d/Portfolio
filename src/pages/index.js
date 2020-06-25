/** @jsx jsx */
import { jsx, Grid } from "theme-ui";
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
      <div sx={{display:"grid", gridTemplateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"], gridGap:"12px", mt:44}}>
        <div sx={{backgroundColor:"#f5f5f5",size: "100%", height: "300px"}} />
        <div sx={{backgroundColor:"#f5f5f5", width:"100%", height: "300px"}} />
        <div sx={{backgroundColor:"#f5f5f5", width:"100%", height: "300px"}} />
      </div>
    </Container>
  </React.Fragment>
);

export default IndexPage;
