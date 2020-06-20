/** @jsx jsx */
import { jsx } from "theme-ui";

const SectionContainer = (props) => (
  <div sx={{ maxWidth: ["98%","80%"], mx: "auto", mt: props.mt? props.mt: 20 }}>
   {props.children}

  </div>
);

export default SectionContainer;
//border:  "2px solid #000", p:3