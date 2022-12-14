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
import { pink } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import "./CoffeeCard.css";

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
  switch (brewMethod) {
    case "aeropress":
      return require("../assets/aeropress.png");
    case "chemex":
      return require("../assets/chemex.png");
    case "french press":
      return require("../assets/french-press.png");
    case "V60":
      return require("../assets/pour-over.png");
    case "batch brew":
      return require("../assets/batch-brew.png");
    case "siphon":
      return require("../assets/siphon.png");
    default:
      return require("../assets/aeropress.png");
  }
};

const CoffeeCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        avatar={
          <Avatar
            className="avatar"
            sx={{ bgcolor: "#fff" }}
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
          {post.comment}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
          <Timer times={post.pourGroup} />
          <Typography pt={2} paragraph>
            Method: {post.method}
          </Typography>
          <Typography paragraph>
            Amount of Coffee: {post.coffeeWeight}g
          </Typography>
          <Typography paragraph>Origin: {post.origin}</Typography>
          <Typography paragraph>Taste profile: {post.tasteProfile}</Typography>
          <Typography paragraph>Grinder: {post.grinder}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CoffeeCard;
