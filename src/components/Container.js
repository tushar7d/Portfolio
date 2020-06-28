/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = (props) => (
    <div sx={{ maxWidth: 960, mx: "auto",my:50, px:24 }}>{props.children}</div>
  );

  export default Container