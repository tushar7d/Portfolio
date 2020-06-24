/** @jsx jsx */
import { jsx } from "theme-ui";

const SectionListItem = (props) => (
  <a href={props.link} target="_blank" sx={{ mt: 16 }}>
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
    <div>{props.sub}</div>
  </a>
);

export default SectionListItem;
