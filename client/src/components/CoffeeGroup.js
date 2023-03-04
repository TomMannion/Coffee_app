import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";

function CoffeeGroup() {
  const [coffeeGroup, setCoffeeGroup] = useState([]);
  const [origin, setOrigin] = React.useState("");
  const originData = [
    "Ethiopia",
    "Colombia",
    "Brazil",
    "Guatemala",
    "Honduras",
  ];

  const fetchCoffeeGroup = async () => {
    const response = await axios.get("http://localhost:3500/posts/all");
    setCoffeeGroup(response.data);
  };

  const handleChange = (event) => {
    setOrigin(event.target.value);
  };

  useEffect(() => {
    fetchCoffeeGroup();
  }, []);

  return (
    <Grid container justifyContent="center" spacing={0}>
      <Grid container>
        <Grid item xs={4} style={{ width: "300px" }}>
          <Filter data={originData} setData={setOrigin} label={"Origin"} />
        </Grid>
      </Grid>
      {coffeeGroup.map((post, index) => (
        <Grid item xs={12} md={4} lg={3} key={post + index}>
          <CoffeeCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CoffeeGroup;
