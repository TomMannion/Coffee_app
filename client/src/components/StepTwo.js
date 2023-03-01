import Origin from "./Origin";
import Roaster from "./Roaster";
import Grid from "@mui/material/Grid";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: "20px" }}>
      <Grid item xs={12}>
        <Roaster />
      </Grid>
      <Grid item xs={12}>
        <Origin />
      </Grid>
    </Grid>
  );
}
