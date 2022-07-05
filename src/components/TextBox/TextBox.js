import { TextField, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Margin } from "@mui/icons-material";

function TextBox({ props1, props2 }) {
  // const { lb } = props;

  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", margin: "10px 5px" }}
    >
      <Typography sx={{ mr: 3, minWidth: 200 }}>{props1}</Typography>
      <TextField id="outlined-basic" label={props2} variant="standard" />
    </div>
  );
}

export default TextBox;
