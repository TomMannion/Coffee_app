import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function Submit() {
  const submitAll = useSelector((state) => state);

  const handleSubmit = async () => {
    await axios.post("http://localhost:3500/posts", submitAll);
    window.location.reload(false);
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        handleSubmit();
      }}
    >
      Submit
    </Button>
  );
}

export default Submit;
