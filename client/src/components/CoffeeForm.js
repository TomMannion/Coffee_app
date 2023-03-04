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
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function CoffeeForm() {
  const [page, setPage] = useState(0);
  const submitAll = useSelector((state) => state);
  const formatSubmit = () => {
    const formattedSubmit = {
      roaster: submitAll.roaster.value,
      origin: submitAll.origin.value,
      brewMethod: submitAll.brewMethod.value,
      grinder: submitAll.grinder.value,
      grindSize: submitAll.grindSize.value,
      pourGroup: submitAll.pourGroup.value.map((pour) => {
        return { pourWeight: pour.pour, pourTime: pour.time };
      }),
      comment: submitAll.comment.value,
      coffeeWeight: submitAll.amount.value,
      waterTemp: submitAll.waterTemp.value,
      method: submitAll.method.value,
      title: submitAll.title.value,
      tasteProfile: submitAll.slider.value,
      image: "https://picsum.photos/200",
    };
    return formattedSubmit;
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:3500/posts/create", formatSubmit());
    window.location.reload(false);
  };

  function GridItem({ comp }) {
    return (
      <Grid item xs={12} md={6}>
        {comp}
      </Grid>
    );
  }

  const nextPage = () => {
    if (page === 3) {
      handleSubmit();
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 0) {
      return;
    } else {
      setPage(page - 1);
    }
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
    case 3:
      return (
        <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
          <GridItem comp={<AddPour />} />
          <GridItem comp={<PourGroup />} />
          <button onClick={prevPage}>Previous</button>
          <button onClick={nextPage}>{page === 3 ? "Submit" : "Next"}</button>
        </Grid>
      );
  }
}

export default CoffeeForm;
