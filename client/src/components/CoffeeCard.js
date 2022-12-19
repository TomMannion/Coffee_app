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

const CoffeeCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const tasteProfile = (taste) => {
  //   if (taste < 20) {
  //     ("Very acidic");
  //   } else if (taste < 40) {
  //     ("Acidic");
  //   } else if (taste < 60) {
  //     ("Balanced");
  //   } else if (taste < 80) {
  //     ("Bitter");
  //   } else {
  //     ("Very bitter");
  //   }
  // };

  console.log("post", post);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: pink[200] }} aria-label="recipe">
            {post.brewMethod.slice(0, 3).toUpperCase()}
          </Avatar>
        }
        title={post.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt="PlaceHolder alt"
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
