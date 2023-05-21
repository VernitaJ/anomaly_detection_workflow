import React from "react";
import Requirements from "./Items/Requirements";
import SystemDesign from "./Items/SystemDesign";
import AnomalyAnalysis from "./Items/AnomalyAnalysis";
import DataProcessing from "./Items/DataProcessing";
import MLModel from "./Items/MLModel";
import AnomalyClassification from "./Items/AnomalyClassification";
import Testing from "./Items/Testing";
import Deployment from "./Items/Deployment";
import Maintenance from "./Items/Maintenance";
import styled from "styled-components";


const Information = ({ item }) => {
  let [component] = React.useState(null);
  //switch case
  console.log(item.name);
  switch (item.name) {
    case "Requirements":
      component = <Requirements />;
      break;
    case "System Design":
      component = <SystemDesign />;
      break;
    case "Data Analysis":
      component = <AnomalyAnalysis />;
      break;
    case "Data Processing":
      component = <DataProcessing />;
      break;
    case "Machine Learning Model":
      component = <MLModel />;
      break;
    case "Anomaly Classification":
      component = <AnomalyClassification />;
      break;
    case "Testing":
      component = <Testing/>;
      break;
    case "Deployment":
      component = <Deployment />;
      break;
    case "Maintenance":
      component = <Maintenance />;
      break;
  }
  return (
    <Container>
      <h3>{item.name}</h3>
      {component}
    </Container>
  );
};

export default Information;

const Container = styled.div`
  width: 90%;
  margin: 40px 0;
  color: black;
  text-align: left;
  font-size: 15px;
  border: 2px solid black;
  padding: 20px;
`;
