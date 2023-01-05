import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";

function CoffeeGroup() {
  const [coffeeGroup, setCoffeeGroup] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/posts/all").then((res) => {
      setCoffeeGroup(res.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {coffeeGroup.map((post, index) => (
        <Grid
          container
          justifyContent="center"
          xs={12}
          md={4}
          lg={3}
          key={post + index}
        >
          <Grid item>
            <CoffeeCard post={post} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default CoffeeGroup;
