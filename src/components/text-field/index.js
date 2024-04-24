import React from "react";
import { FormControl, FormHelperText, TextField } from "@mui/material";

const TextFieldComponent = ({ error = false, errorMessage = "", ...props }) => {
  return (
    <FormControl fullWidth>
      <TextField variant="outlined" error={Boolean(error)} {...props} />
      {error && (
        <FormHelperText sx={{ color: "red" }}>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  );
};

export default TextFieldComponent;
