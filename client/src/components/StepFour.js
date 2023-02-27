// combine Origin and Roaster into one component
import AddPour from "./AddPour";
import PourGroup from "./PourGroup";
import Method from "./Method";
import Grid from "@mui/material/Grid";
import "../App.css";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={4}>
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
