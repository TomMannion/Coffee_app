// import material UI
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Stepper, Step, StepLabel } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Form.css";
import "./theme.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function TestForm() {
  const submitAll = useSelector((state) => state);
  const formatSubmit = () => {
    const formattedSubmit = {
      roaster: submitAll.roaster.value,
      origin: submitAll.origin.value,
      brewMethod: submitAll.brewMethod.value,
      grinder: submitAll.grinder.value,
      grindSize: submitAll.grindSize.value,
      pourGroup: submitAll.pourGroup.value.map((pour) => {
        return { pourWeight: pour.pour, pourTime: pour.time };
      }),
      coffeeWeight: submitAll.amount.value,
      waterTemp: submitAll.waterTemp.value,
      method: submitAll.method.value,
      comment: submitAll.comment.value,
      title: submitAll.title.value,
      image: "https://picsum.photos/200",
    };
    return formattedSubmit;
  };
  const readyToSubmit = () => {
    if (
      submitAll.roaster.value !== "" &&
      submitAll.origin.value !== "" &&
      submitAll.brewMethod.value !== "" &&
      submitAll.grinder.value !== "" &&
      submitAll.grindSize.value !== "" &&
      submitAll.pourGroup.value !== { pour: "", time: "" } &&
      submitAll.amount.value !== "" &&
      submitAll.waterTemp.value !== "" &&
      submitAll.method.value !== "" &&
      submitAll.comment.value !== "" &&
      submitAll.title.value !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async () => {
    if (readyToSubmit()) {
      await axios.post("http://localhost:3500/posts/create", formatSubmit());
      window.location.reload(false);
    } else {
      return;
    }
  };

  return (
    <Card
      className="form-wrapper"
      sx={{
        backgroundColor: "#FFE400",
        paddingBottom: "70px",
        boxShadow: "inherit",
      }}
    >
      <CardContent className="form whitebg" sx={{ borderRadius: "20px" }}>
        <FormikStepper initialValues={{}} onSubmit={handleSubmit}>
          <Field component={StepOne} />
          <Field component={StepTwo} />
          <Field component={StepThree} />
          <Field component={StepFour} />
        </FormikStepper>
      </CardContent>
    </Card>
  );
}

export function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = React.useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);
  const submitAll = useSelector((state) => state);
  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  const nextStep = () => {
    // check if brewMethod is set
    if (step === 0) {
      if (submitAll.brewMethod.value === "") {
        return;
      }
    } else if (step === 1) {
      if (submitAll.origin.value === "" || submitAll.roaster.value === "") {
        return;
      }
    } else if (step === 2) {
      if (submitAll.grinder.value === "" || submitAll.grindSize.value === "") {
        return;
      }
    }
    setStep((s) => s + 1);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <ThemeProvider theme={theme}>
            <Stepper alternativeLabel activeStep={step}>
              {childrenArray.map((child, index) => (
                <Step key={index} completed={step > index || completed}>
                  <StepLabel>{child.props.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </ThemeProvider>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12}>
              {currentChild}
            </Grid>
            {step > 0 ? (
              <Grid item xs={6}>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                  style={{ float: "right" }}
                >
                  Back
                </Button>
              </Grid>
            ) : (
              <Grid item xs={6} />
            )}
            <Grid item xs={6}>
              {isLastStep() ? (
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={nextStep}
                  style={{ float: "right" }}
                >
                  Next
                </Button>
              )}
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
