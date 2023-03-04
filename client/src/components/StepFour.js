// combine Origin and Roaster into one component
import AddPour from "./AddPour";
import PourGroup from "./PourGroup";
import WaterTemp from "./WaterTemp";
import Amount from "./Amount";
import Title from "./Title";
import Method from "./Method";
import Comment from "./Comment";
import Grid from "@mui/material/Grid";
import "../App.css";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: "20px" }}>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <Comment />
      </Grid>
      <Grid item xs={12}>
        <Amount />
      </Grid>
      <Grid item xs={12}>
        <WaterTemp />
      </Grid>
      <Grid item xs={12}>
        <AddPour />
      </Grid>
      <Grid item xs={12}>
        <PourGroup />
      </Grid>
      <Grid item xs={12}>
        <Method />
      </Grid>
    </Grid>
  );
}
