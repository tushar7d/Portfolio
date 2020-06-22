/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = (props) => (
    <div sx={{ maxWidth: 1440, mx: "auto",mb:50, px: 48 }}>{props.children}</div>
  );

  export default Container