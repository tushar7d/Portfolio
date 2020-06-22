/** @jsx jsx */
import { jsx } from "theme-ui";

const SectionListItem = (props) => (
  <div sx={{ mt: 16 }}>
    <div sx={{ fontSize: 3, fontWeight: "500" }}>{props.heading}</div>
    <div>{props.sub}</div>
  </div>
);

export default SectionListItem;
