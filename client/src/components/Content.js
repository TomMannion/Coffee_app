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

function GridItem({ item }) {
  return (
    // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
    <Grid item xs={12} sm={6}>
      {item}
    </Grid>
  );
}

function Content(props) {
  return (
    <Grid container spacing={2}>
      <GridItem item={<Roaster />} />
      <GridItem item={<Origin />} />
      <GridItem item={<Grinder />} />
      <GridItem item={<GrindSize />} />
      <GridItem item={<BrewMethod />} />
      <GridItem item={<Amount />} />
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
        <Submit />
      </Grid>
    </Grid>
  );
}

export default Content;
