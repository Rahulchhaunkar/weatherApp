import { Button } from "@mui/material";
import React from "react";
import { WEB_COLORS } from "../../../lib/Constants";

const SubmitButtonComponent = ({
  variant = "contained",
  type = "submit",
  children,
  buttonStyle,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      sx={{
        backgroundColor: WEB_COLORS.primary,
        color: WEB_COLORS.secondary,
        textTransform: "none",

        "&:hover": {
          backgroundColor: WEB_COLORS.secondary,
          color: WEB_COLORS.primary,
          cursor: "pointer",
        },
        ...buttonStyle,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButtonComponent;
