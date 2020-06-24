/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionContainer from "../components/SectionContainer";

const AboutSection = () => (
  <SectionContainer mt={[80, "30vh"]}>
    <h1 sx={{ fontSize: 7, fontWeight: "heading" }}>Hello</h1>
    <p sx={{ fontSize: 4 }}>
      I am Tushar Debnath a Product designer & Design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia. When I am not Designing or Coding,
      You can find me reading books, making music, and occasionally  travelling with my wife.
    </p>
    <div sx={{ fontSize: 3,fontWeight: "bold", mt:12 }}>Know more about me</div>
  </SectionContainer>
);

export default AboutSection;
