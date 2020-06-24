/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react"


const SectionList = (props) => (
    <React.Fragment>
    <h2 sx={{ fontSize: 4,fontWeight:"heading", mb: 16 }}>{props.heading}</h2>
    {props.children}
    </React.Fragment>

);

export default SectionList;
