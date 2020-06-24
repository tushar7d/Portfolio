/** @jsx jsx */
import { jsx } from "theme-ui";

const Grid = (props) =>(
    <div
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${props.column? props.column: 2}, 1fr)`,
          gridTemplateRows: "1fr",
          gridColumnGap: "24px",
        }}
    >{props.children}</div>
)

export default Grid