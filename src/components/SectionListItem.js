/** @jsx jsx */
import { jsx } from "theme-ui";

const SectionListItem = (props) => (
  <a href={props.link ? props.link :"/"} target="_blank" rel="noreferrer" >
    <div
      sx={{
        fontSize: 3,
        fontWeight: "500",
        ":hover": {
          color: "blue",
        },
      }}
    >
      {props.heading}
    </div>
    <div sx={{mb: 12,}}>{props.sub}</div>
  </a>
);

export default SectionListItem;
