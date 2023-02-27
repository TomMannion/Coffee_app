// combine Origin and Roaster into one component
import Origin from "./Origin";
import Roaster from "./Roaster";
import Grid from "@mui/material/Grid";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
      <Roaster />
      <Origin />
    </Grid>
  );
}
