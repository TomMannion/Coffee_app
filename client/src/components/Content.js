import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRoaster } from "../features/roasterSlice";

function Content(props) {
  return (
    <div className="content">
      <h1>Coffee App</h1>
      <form className="addForm"></form>
    </div>
  );
}

export default Content;
