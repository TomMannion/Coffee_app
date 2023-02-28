import Grinder from "./Grinder";
import GrindSize from "./GrindSize";
import Grid from "@mui/material/Grid";

export default function StepOne() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{ pt: 12 }}>
      <Grinder />
      <GrindSize />
    </Grid>
  );
}
