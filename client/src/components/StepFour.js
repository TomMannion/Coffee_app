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
// mui timepicker
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function StepOne() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "monospace",
        textTransform: "none",
        fontSize: 16,
        color: "black",
      },
    },
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
