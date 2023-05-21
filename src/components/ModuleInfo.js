import React from "react";
import Data from "./modules/Data";
import Anomaly from "./modules/Anomaly";
import styled from "styled-components";
import Prediction from "./modules/Prediction";

var parse = require("html-react-parser");

const ModuleInfo = ({ item, selected, handleClick }) => {
  let [component, setComponent] = React.useState(null);

  switch (item) {
    case "Data Module":
      setComponent = <Data />;
      break;
    case "Anomaly Detection Module":
      setComponent = <Anomaly />;
      break;
    case "Prediction Module":
      setComponent = <Prediction />;
      break;
  }
  return (
    <Container>
      <Item onClick={handleClick} style={selected === item ? {backgroundColor: "slategray", color: "white"}: null}>{item}</Item>
      {selected === item ? <Information>{setComponent}</Information> : null}
    </Container>
  );
};

export default ModuleInfo;

const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 20px;
  color: black;
  text-align: left;
`;

const Item = styled.div`
  align-self: left;
  padding: 10px;
  border-radius: 5px;
  :hover {
    background-color: slategray;
    color: white;
    cursor: pointer;
  }
  font-weight: bold;
`;

const Information = styled.div`
    margin-top: 30px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid black;
    background-color: #f2f2f2;
    text-align: left;
}`;
