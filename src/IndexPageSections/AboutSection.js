/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionContainer from "../components/SectionContainer";
import { Link } from "gatsby"

const AboutSection = () => (
  <SectionContainer mt={[80, "30vh"]}>
    <h1 sx={{ fontSize: 7, fontWeight: "heading" }}>Hello</h1>
    <p sx={{ fontSize: 3 }}>
      I am Tushar Debnath a Product designer & Design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia. When I am not Designing or Coding,
      You can find me reading books, making music, and occasionally  travelling with my wife.
      <br /> 
      <Link to="/about" sx={{ fontSize: 2,fontWeight: "bold", mt:"16px" }}>Know more</Link>
      
    </p>

    
  </SectionContainer>
);

export default AboutSection;
