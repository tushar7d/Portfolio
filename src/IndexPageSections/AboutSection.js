/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionContainer from "../components/SectionContainer";
import { Link } from "gatsby";

const AboutSection = () => (
  <SectionContainer mt={[80, "35vh"]}>
    <h1 sx={{ fontSize: 6, fontWeight: "heading" }}>Hello</h1>
    <p sx={{ fontSize: 4, mb: 16 }}>
      I am Tushar Debnath a product designer & design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia. When I am not designing or coding, you can find
      me reading books, making music, and occasionally travelling with my wife.
    </p>
    <Link to="/about" sx={{ fontSize: 3, mt: "18px", color: "blue", mb:"24px" }}>
      Know more about me
    </Link>
  </SectionContainer>
);

export default AboutSection;
