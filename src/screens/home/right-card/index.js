import React from "react";
import { PaperComponent } from "../../../components";
import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Air, LocationCity, Thermostat, WaterDrop } from "@mui/icons-material";

const RightHomeCard = () => {
  const cityDetails = useSelector((data) => data?.city);
  return (
    <PaperComponent>
      <Stack py={4} spacing={2} justifyContent="space-between">
        <Typography variant="h5">City Weather Conditions</Typography>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <LocationCity />
            <Typography fontWeight="bold">City Name:</Typography>
          </Stack>
          <Typography textTransform="capitalize">
            {cityDetails?.cityName}
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Air />
            <Typography fontWeight="bold">Wind Speed:</Typography>
          </Stack>
          <Typography>
            {cityDetails?.weather?.windSpeed.toFixed(2)} m/s
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Thermostat />
            <Typography fontWeight="bold">Temperature:</Typography>
          </Stack>
          <Typography>
            {cityDetails?.weather?.temperature.toFixed(2)} &#8451;
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <WaterDrop />
            <Typography fontWeight="bold">Humidity:</Typography>
          </Stack>
          <Typography>
            {cityDetails?.weather?.humidity.toFixed(2)} %rh
          </Typography>
        </Stack>
      </Stack>
    </PaperComponent>
  );
};

export default RightHomeCard;
