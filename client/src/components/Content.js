import React from "react";
import Roaster from "./Roaster";

function Content(props) {
  return (
    <div className="content">
      <h1>Coffee App</h1>
      <form className="addForm" role="form">
        <Roaster />
      </form>
    </div>
  );
}

export default Content;
