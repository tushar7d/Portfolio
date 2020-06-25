/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionList from "../components/SectionList";
import SectionContainer from "../components/SectionContainer";
import SectionListItem from "../components/SectionListItem";

const FigmaPlugin = () => (
  <SectionContainer mt={50}>
    <SectionList heading="Design Tools">
      <SectionListItem
        heading="Design Linter"
        sub="Plugin"
      />
      <SectionListItem
        heading="Color Pallete Generator"
        sub="Plugin"
      />
       
      
    </SectionList>
  </SectionContainer>
);

export default FigmaPlugin;
