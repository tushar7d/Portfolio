/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionContainer from '../components/SectionContainer'

const AboutSection = () => (
  <SectionContainer mt={[80,300]}>
    <h1 sx={{ fontSize: 7, fontWeight:"heading" }}>Hello</h1>
    <p sx={{ fontSize: 4 }}>
      I am Tushar Debnath a Product designer & Design technologist living in New
      Delhi. Currently I am building consumer travel products and internal
      design tools at Expedia.
    </p>
  </SectionContainer>
);

export default AboutSection;
