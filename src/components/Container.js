/** @jsx jsx */
import { jsx } from "theme-ui";

const Container = (props) => (
    <div sx={{ maxWidth: 1280, px: 40 ,mb:50 }}>{props.children}</div>
  );

  export default Container