/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import Container from "../components/Container";
import SectionContainer from "../components/SectionContainer";


const IndexPage = () => (
  <React.Fragment>
    
    <Container>
      <SectionContainer mt={[80, "30vh"]}>
      <h1 sx={{ fontSize: 6, fontWeight: "heading" }}>About Me</h1>
      <p sx={{ fontSize: 4 }}>
      I am Tushar Debnath a Product designer & Design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia. When I am not Designing or Coding,
      You can find me reading books, making music, and occasionally  travelling with my wife.
    </p>
      </SectionContainer>
    </Container>
  </React.Fragment>
);

export default IndexPage;
