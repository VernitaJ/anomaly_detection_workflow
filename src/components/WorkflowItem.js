import React from "react";
import requirements from "../arrows/requirements.svg";
import systemdesign from "../arrows/systemdesign.svg";
import dataanalysis from "../arrows/dataanalysis.svg";
import dataprocessing from "../arrows/dataprocessing.svg";
import mlmodel from "../arrows/mlmodel.svg";
import anomalyclassification from "../arrows/anomalyclassification.svg";
import testing from "../arrows/testing.svg";
import deployment from "../arrows/deployment.svg";
import maintenance from "../arrows/maintenance.svg";
import styled from "styled-components";

const WorkflowItem = ({ item, updateItem, current }) => {
  let svgItem;
  if (item.name === "Requirements") {
    svgItem = requirements;
  } else if (item.name === "System Design") {
    svgItem = systemdesign;
  } else if (item.name === "Data Analysis") {
    svgItem = dataanalysis;
  } else if (item.name === "Data Processing") {
    svgItem = dataprocessing;
  } else if (item.name === "Machine Learning Model") {
    svgItem = mlmodel;
  } else if (item.name === "Anomaly Classification") {
    svgItem = anomalyclassification;
  } else if (item.name === "Testing") {
    svgItem = testing;
  } else if (item.name === "Deployment") {
    svgItem = deployment;
  } else if (item.name === "Maintenance") {
    svgItem = maintenance;
  }

  return (
    //create a div rectangle with an arrow 20px wide
    <div>
      <Item
        onClick={() => updateItem(item)}
        style={
          item.name == current
            ? { backgroundColor: "orange", width: "132px" }
            : { width: "130px" }
        }
      >
        <img src={svgItem} alt="React Logo" />
      </Item>
    </div>
  );
};

export default WorkflowItem;

const Item = styled.div`
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    width: 140px;
    background-color: lightgrey;
    transition: width 0.5s;
  }
`;
