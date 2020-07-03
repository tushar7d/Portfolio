/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import Container from "../components/Container";

const IndexPage = () => (
  <Container>
    <AboutSection />
    <GridContainer>
    <WorkExCard />
    

      

      
    </GridContainer>
  </Container>
);

const AboutSection = () => (
  <React.Fragment>
    <h1
      sx={{ fontSize: 6, fontWeight: "heading", mt: ["50px", "20vh", "30vh"] }}
    >
      Hello
    </h1>
    <p sx={{ fontSize: 4, mb: 16 }}>
      I am Tushar Debnath a product designer & design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia. When I am not designing or coding, you can find
      me reading books, making music, and occasionally travelling with my wife.
    </p>
  </React.Fragment>
);

const GridContainer = (props) => (
  <div
    sx={{
      display: "grid",
      gridTemplateColumns: [
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ],
      gridGap: "10px",
      my: 50,
    }}
  >
    {props.children}
  </div>
);

const WorkExCard = () => (
  <div sx={{ minHeight: 300 }}>
    <div sx={{fontSize:4, fontWeight:"bold", mb:12}} >Experience</div>
    <div sx={{fontSize:4, }}>Expedia</div>
    <div sx={{fontSize:2, }}>Curently</div>
    
    
  </div>
  
);

export default IndexPage;
