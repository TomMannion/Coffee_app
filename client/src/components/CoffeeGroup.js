import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";

function CoffeeGroup(props) {
  const [coffeeGroup, setCoffeeGroup] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3500/posts").then((res) => {
      setCoffeeGroup(res.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {coffeeGroup.map((post) => (
        <Grid container justifyContent="center" xs={12} md={6} lg={3}>
          <Grid item>
            <CoffeeCard post={post} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default CoffeeGroup;
