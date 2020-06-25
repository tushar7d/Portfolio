/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";


const IndexPage = () => (
  <React.Fragment>
    
    <Container>
      <SectionContainer mt={[80, "10vh"]}>
      <h1 sx={{ fontSize: 5, fontWeight: "heading" }}>About Me</h1>
      <p sx={{ fontSize: 4 }}>
      I have been 
    </p>
      </SectionContainer>
      <SectionContainer mt={24}>
      <h1 sx={{ fontSize: 3, fontWeight: "heading" }}>Proffesional Experience</h1>
      <p sx={{ fontSize: 2 }}>
      I have been 
    </p>
      </SectionContainer>
      <SectionContainer mt={24}>
      <h1 sx={{ fontSize: 3, fontWeight: "heading" }}>Education</h1>
      <p sx={{ fontSize: 2 }}>
      I have been 
    </p>
      </SectionContainer>
    </Container>
  </React.Fragment>
);

export default IndexPage;
