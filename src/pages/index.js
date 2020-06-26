/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Container from "../components/Container";
import { AboutSection } from "../IndexPageSections";
import SectionContainer from "../components/SectionContainer";
import mmtOne from "../images/mmt_01.png";

const MainGrid = (props) => (
  <div
    sx={{
      display: "grid",
      gridTemplateColumns: [
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ],
      columnGap: "12px",
      mt: 44,
    }}
  >
    {props.children}
  </div>
);

const Item = (props) => (
  <div sx={{ width: "100%", height:"200px", bg:"#fff", boxShadow:"0 20px 20px rgba(0,0,0,.08)"}} />
   
);

const itemOne = {
  title: "One",
  image: mmtOne,
  alt: "item one",
};

const Header = () => (
  <div sx={{ width: "100vw", height: 50, position: "fixed", top: 0, left: 0 }}>
    <Container>
      <SectionContainer>TD</SectionContainer>
    </Container>
  </div>
);
const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Container>
      <AboutSection />
      <MainGrid>
        <Item {...itemOne} />
        <Item {...itemOne} />
        <Item {...itemOne} />
        <Item {...itemOne} />
        <Item {...itemOne} />
        <Item {...itemOne} />
      </MainGrid>
    </Container>
  </React.Fragment>
);

export default IndexPage;
