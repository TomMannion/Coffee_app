import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Filter from "./Filter";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import axios from "axios";
import CoffeeCard from "./CoffeeCard";
//import the css file CardGroup.css
import "./CardGroup.css";

function CoffeeGroup() {
  const [coffeeGroup, setCoffeeGroup] = useState([]);
  const [origin, setOrigin] = React.useState("");
  const [originData, setOriginData] = useState([]);
  const [brewMethod, setBrewMethod] = React.useState("");
  const [brewMethodData, setBrewMethodData] = useState([]);
  const [title, setTitle] = React.useState("");

  const fetchOriginData = async () => {
    const response = await axios.get("http://localhost:3500/posts/origins");
    setOriginData(response.data);
  };

  const fetchBrewMethodData = async () => {
    const response = await axios.get("http://localhost:3500/posts/brewMethods");
    setBrewMethodData(response.data);
  };

  const fetchCoffeeGroup = async () => {
    // use the find method to add the chosen origin, title and brew method to the req body if any of the params are empty strings assume that the user does not want to filter by that param
    const response = await axios.get("http://localhost:3500/posts/find", {
      params: {
        origin: origin,
        title: title,
        brewMethod: brewMethod,
      },
    });
    setCoffeeGroup(response.data);
  };

  useEffect(() => {
    fetchOriginData();
    fetchBrewMethodData();
    fetchCoffeeGroup();
  }, [brewMethod, origin, title]);

  return (
    <Grid container justifyContent="center" spacing={0}>
      <Grid
        container
        className="bg_filter"
        justifyContent="center"
        item
        xs={12}
        p={"20px"}
      >
        <Grid item xs={4} className="flexend">
          <Filter data={originData} setData={setOrigin} label={"Origin"} />
        </Grid>
        <Grid item xs={4}>
          <Filter
            data={brewMethodData}
            setData={setBrewMethod}
            label={"Brew Method"}
          />
        </Grid>
        <Grid item className="flexstart" xs={4}>
          <TextField
            className="filter"
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
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
