/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionContainer from "../components/SectionContainer";
import { Link } from "gatsby";

const AboutSection = () => (
  <SectionContainer mt={[80, "35vh"]}>
    <h1 sx={{ fontSize: [5,7], fontWeight: "heading" }}>Hello I am Tushar.</h1>
    <p sx={{ fontSize: [3,5], mb:16 }}>
      A product designer & design technologist living in New Delhi. Currently I
      am building consumer travel products and internal design tools at Expedia.
      When I am not designing or coding, you can find me reading books, making
      music, and occasionally travelling with my wife.

      
    </p>
    <Link to="/about" sx={{ fontSize: [2,4], mt:"18px", color: "blue" }}>Know more about me</Link>
  </SectionContainer>
);

export default AboutSection;
