import React from "react";
import { useState, useEffect } from "react";
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

function CoffeeForm() {
  const [page, setPage] = useState(0);

  function GridItem({ comp }) {
    return (
      <Grid item xs={12} md={6}>
        {comp}
      </Grid>
    );
  }

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  switch (page) {
    case 0:
      return (
        <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
          <GridItem comp={<BrewMethod />} />
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </Grid>
      );
    case 1:
      return (
        <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
          <GridItem comp={<Roaster />} />
          <GridItem comp={<Origin />} />
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </Grid>
      );
    case 2:
      return (
        <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
          <GridItem comp={<Grinder />} />
          <GridItem comp={<GrindSize />} />
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </Grid>
      );
  }
}

export default CoffeeForm;
