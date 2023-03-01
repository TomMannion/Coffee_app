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

export default function TestForm() {
  return (
    <Card>
      <CardContent>
        <FormikStepper initialValues={{}}>
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
  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

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
        <Form
          autoComplete="off"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={index} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Grid container spacing={2}>
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
                >
                  Back
                </Button>
              </Grid>
            ) : (
              <Grid xs={6} />
            )}
            <Grid item xs={6}>
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Submitting" : isLastStep() ? "Submit" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
