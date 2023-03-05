import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Timer from "./Timer";
import "./CoffeeCard.css";
import syphon from "../assets/syphon.svg";
import aeropress from "../assets/aeropress.svg";
import chemex from "../assets/chemex.svg";
import frenchPress from "../assets/french-press.svg";
import v60 from "../assets/v60.svg";
import batchBrew from "../assets/batch-brew.svg";
import mokaPot from "../assets/moka-pot.svg";
import dripPot from "../assets/drip-pot.svg";
import coldBrew from "../assets/cold-brew.svg";
import espresso from "../assets/espresso.svg";
import defaultImg from "../assets/default.svg";
import "./theme.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const loadAvatar = (brewMethod) => {
  // load avatar based on brew method from assets folder
  brewMethod = brewMethod.toLowerCase();
  switch (brewMethod) {
    case "aeropress":
      return aeropress;
    case "chemex":
      return chemex;
    case "batch brew":
      return batchBrew;
    case "syphon":
      return syphon;
    case "moka pot":
      return mokaPot;
    case "french press":
      return frenchPress;
    case "pour over":
      return v60;
    case "drip pot":
      return dripPot;
    case "cold brew":
      return coldBrew;
    case "espresso":
      return espresso;
    default:
      return defaultImg;
  }
};

const CoffeeCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const lookup = require("country-code-lookup");

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  return (
    <Card
      className="coffee_card"
      sx={{
        minWidth: "100%",
        borderRadius: "10px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            className="avatar"
            sx={{ bgcolor: "#FFE400" }}
            aria-label="recipe"
          >
            <img
              className="avatarImg"
              src={loadAvatar(post.brewMethod)}
              alt="avatar"
            />
          </Avatar>
        }
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {getFlagEmoji(lookup.byCountry(post.origin).iso2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.method}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method</Typography>
          {post.method.map((step, index) => {
            return (
              <Typography key={index} paragraph>
                Step {index + 1}: {step}
              </Typography>
            );
          })}
          <Typography paragraph>
            Amount of Coffee: {post.coffeeWeight}g
          </Typography>
          <Typography paragraph>Roaster: {post.roaster}</Typography>
          <Typography paragraph>
            {post.origin}
            {getFlagEmoji(lookup.byCountry(post.origin).iso2)}
          </Typography>
          <Typography paragraph>Grinder: {post.grinder}</Typography>
          <Timer times={post.pourGroup} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CoffeeCard;
