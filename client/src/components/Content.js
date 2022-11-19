import React from "react";
import Roaster from "./Roaster";
import Origin from "./Origin";

function Content(props) {
  return (
    <div className="content">
      <h1>Coffee App</h1>
      <form className="addForm" role="form">
        <Roaster />
        <Origin />
      </form>
    </div>
  );
}

export default Content;
