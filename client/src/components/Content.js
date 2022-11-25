import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Roaster from "./Roaster";
import Origin from "./Origin";
import Grinder from "./Grinder";
import GrindSize from "./GrindSize";
import BrewMethod from "./BrewMethod";
import AddPour from "./AddPour";
import PourGroup from "./PourGroup";
import Comment from "./Comment";
import Submit from "./Submit";
import Amount from "./Amount";
import WaterTemp from "./WaterTemp";
import Title from "./Title";
import Method from "./Method";
import Slider from "./Slider";

function GridItem({ comp }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} md={6}>
      {comp}
    </Grid>
  );
}

function Content(props) {
  return (
    <Grid container spacing={2} sx={{ pt: 4 }}>
      <Grid container justifyContent="center">
        <Grid container justifyContent="end" xs={5}>
          <GridItem comp={<Roaster />} />
          <GridItem comp={<Origin />} />
          <GridItem comp={<Grinder />} />
          <GridItem comp={<GrindSize />} />
          <GridItem comp={<BrewMethod />} />
          <GridItem comp={<Amount />} />
          <GridItem comp={<WaterTemp />} />
          <GridItem comp={<Title />} />
        </Grid>
        <Grid container xs={2} justifyContent="start" alignSelf="Center">
          <Slider />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <AddPour />
      </Grid>
      <Grid xs={12}>
        <PourGroup />
      </Grid>
      <Grid xs={12}>
        <Comment />
      </Grid>
      <Grid xs={12}>
        <Method />
      </Grid>
      <Grid xs={12}>
        <Submit />
      </Grid>
    </Grid>
  );
}

export default Content;
