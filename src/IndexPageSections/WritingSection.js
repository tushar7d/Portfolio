/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionList from "../components/SectionList";
import SectionContainer from "../components/SectionContainer";
import SectionListItem from "../components/SectionListItem";

const WritingSection = () => (
  <SectionContainer mt={50}>
    <SectionList heading="Blog">
      <SectionListItem
        heading="How I created a Figma plugin to automate our design system migration."
        sub="Medium Article"
      />
      <SectionListItem
        heading="How structuring Figma files in a consistent way has improved
        collaboration and efficiency."
        sub="Medium Article"
      />

      <SectionListItem
        heading="How to run Figma shortcuts using Midi."
        sub="Medium Article"
      />
    </SectionList>
  </SectionContainer>
);

export default WritingSection;
