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
        link="https://blog.prototypr.io/how-i-created-a-figma-plugin-to-automate-our-design-system-migration-600d1c07518e"
      />
      <SectionListItem
        heading="How structuring Figma files in a consistent way has improved
        collaboration and efficiency."
        sub="Medium Article"
        link="https://blog.prototypr.io/how-structuring-figma-files-in-a-consistent-way-has-improved-collaboration-and-efficiency-f3c904791b85"
      />

      <SectionListItem
        heading="How to run Figma shortcuts using Midi."
        sub="Medium Article"
        link="https://blog.prototypr.io/how-to-run-figma-shortcuts-using-midi-e0ab0997eafa"
      />
    </SectionList>
  </SectionContainer>
);

export default WritingSection;
