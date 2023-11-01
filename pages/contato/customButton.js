import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ColorButton = styled(Button)(() => ({
  color: "#00B59F",
  borderRadius: "10px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },

}));

export default function CustomizedButton({ children, ...props }) {
  return <ColorButton {...props}>{children}</ColorButton>;
}
