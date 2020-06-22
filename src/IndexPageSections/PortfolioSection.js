/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionList from "../components/SectionList";
import SectionContainer from "../components/SectionContainer";
import SectionListItem from "../components/SectionListItem";

const PortfolioSection = () => (
  <SectionContainer mt={50}>
    <SectionList heading="Select Work">
      <SectionListItem
        heading="Expedia car rental listing card re-design"
        sub="Showcase"
      />
      <SectionListItem
        heading="Hike Loyalty Program"
        sub="Showcase"
      />
       <SectionListItem
        heading="MakeMyTrip Search Widget"
        sub="Showcase"
      />
    </SectionList>
  </SectionContainer>
);

export default PortfolioSection;
