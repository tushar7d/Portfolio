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
import mmtOne from "../images/mmt_01.png";

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
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: [
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ],
          gridGap: "12px",
          mt: 44,
        }}
      >
        <div
          sx={{ width: "100%", backgroundColor: "#efeff4", position:"relative" }}
        >
          <img
            sx={{
              width: "100%",
             
              backgroundColor: "#efeff4",
              
            }}
            src={mmtOne}
          />
          <div sx={{ position: "absolute", left: 0, bottom: 0, bg:"#000", width:"100%",opacity:0.4, p:3 }}>hello</div>
        </div>

        
      </div>
    </Container>
  </React.Fragment>
);

export default IndexPage;
