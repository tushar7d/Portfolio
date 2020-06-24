/** @jsx jsx */
import { jsx } from "theme-ui";

const Grid = (props) =>(
    <div
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(2, 1fr)`,
          gridTemplateRows: "1fr",
          gridColumnGap: "48px",
        }}
    >{props.children}</div>
)

export default Grid