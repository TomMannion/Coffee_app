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
  const handleSubmit = async () => {
    await axios.post("http://localhost:3500/posts/create", formatSubmit());
    window.location.reload(false);
  };

  return (
    <Card>
      <CardContent>
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
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={index} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

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
              <Button
                startIcon={
                  isSubmitting ? <CircularProgress size="1rem" /> : null
                }
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
                style={{ float: "left" }}
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
