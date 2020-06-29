/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = (props) => (
    <div sx={{ maxWidth: 1280, mx: "auto", px: 40 }}>{props.children}</div>
  );

  export default Container