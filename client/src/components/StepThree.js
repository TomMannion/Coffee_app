import Grinder from "./Grinder";
import GrindSize from "./GrindSize";
import Grid from "@mui/material/Grid";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: "20px" }}>
      <Grid item xs={12}>
        <GrindSize />
      </Grid>
      <Grid item xs={12}>
        <Grinder />
      </Grid>
    </Grid>
  );
}
