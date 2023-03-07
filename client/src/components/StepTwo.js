import Origin from "./Origin";
import Roaster from "./Roaster";
import Grid from "@mui/material/Grid";
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
          <Roaster />
        </Grid>
        <Grid item xs={12}>
          <Origin />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
