/** @jsx jsx */
import { jsx } from "theme-ui";

const TwoColumnGrid = (props) =>(
    <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1fr",
          gridColumnGap: "24px",
        }}
    >{props.children}</div>
)

export default TwoColumnGrid