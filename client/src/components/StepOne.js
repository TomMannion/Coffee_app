// combine Origin and Roaster into one component
import BrewMethod from "./BrewMethod";
import Grid from "@mui/material/Grid";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
      <BrewMethod />
    </Grid>
  );
}
