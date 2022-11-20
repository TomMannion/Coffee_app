import React from "react";
import Roaster from "./Roaster";
import Origin from "./Origin";
import Grinder from "./Grinder";
import GrindSize from "./GrindSize";
import AddPour from "./AddPour";
import PourGroup from "./PourGroup";

function Content(props) {
  return (
    <div className="content">
      <h1>Coffee App</h1>
      <form className="addForm" role="form">
        <Roaster />
        <Origin />
        <Grinder />
        <GrindSize />
        <AddPour />
        <PourGroup />
      </form>
    </div>
  );
}

export default Content;
