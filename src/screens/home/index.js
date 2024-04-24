import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { PaperComponent } from "../../components";

import LeftHomeCard from "./left-card";
import RightHomeCard from "./right-card";

const HomeScreen = () => {
  return (
    <Container>
      <Toolbar />
      <Typography variant="h2" align="center">
        Get Instant City Weather
      </Typography>
      <Toolbar />
      <PaperComponent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LeftHomeCard />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <RightHomeCard />
          </Grid>
        </Grid>
      </PaperComponent>
    </Container>
  );
};

export default HomeScreen;
