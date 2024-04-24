import React from "react";
import {
  CancelButtonComponent,
  PaperComponent,
  SubmitButtonComponent,
  TextFieldComponent,
} from "../../../components";
import { InputAdornment, Stack, Typography } from "@mui/material";
import { LocationCity } from "@mui/icons-material";
import { NAME_REGEX } from "../../../lib/Constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setCityName } from "../../../lib/redux";

const LeftHomeCard = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      cityName: "",
    },
    validationSchema: Yup.object().shape({
      cityName: Yup.string()
        .required("City Name is Required")
        .min(4, "Minimum 4 Charcaters are Required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      //Call Api here to fetch weather details using city name
      dispatch(setCityName(value.cityName));
    },
  });
  const HandleFieldChange = (e, regex) => {
    if (regex(e.target.value)) {
      formik.handleChange(e);
    }
  };
  const HandleResetForm = () => {
    formik.resetForm();
  };
  return (
    <PaperComponent>
      <Stack py={4} spacing={2} justifyContent="space-between">
        <Typography variant="h6">Enter City Name</Typography>
        <TextFieldComponent
          error={formik.errors.cityName && formik.touched.cityName}
          errorMessage={formik.errors.cityName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationCity />
              </InputAdornment>
            ),
          }}
          name="cityName"
          placeholder="Enter City Name"
          label="City Name"
          value={formik.values.cityName}
          onChange={(e) => {
            HandleFieldChange(e, NAME_REGEX);
          }}
          onBlur={formik.handleBlur}
        />

        <Stack
          columnGap={2}
          rowGap={2}
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack alignItems="center" justifyContent="center">
            <SubmitButtonComponent onClick={formik.handleSubmit}>
              Submit
            </SubmitButtonComponent>
          </Stack>
          <Stack alignItems="center" justifyContent="center">
            <CancelButtonComponent onClick={HandleResetForm}>
              Clear
            </CancelButtonComponent>
          </Stack>
        </Stack>
      </Stack>
    </PaperComponent>
  );
};

export default LeftHomeCard;
