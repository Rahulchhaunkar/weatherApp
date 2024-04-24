import { Button } from "@mui/material";
import React from "react";
import { WEB_COLORS } from "../../../lib/Constants";

const CancelButtonComponent = ({
  variant = "contained",
  type = "reset",
  children,
  buttonStyle,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      type={type}
      sx={{
        backgroundColor: WEB_COLORS.secondary,
        color: WEB_COLORS.primary,
        textTransform: "none",
        "&:hover": {
          backgroundColor: WEB_COLORS.primary,
          color: WEB_COLORS.secondary,
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

export default CancelButtonComponent;
