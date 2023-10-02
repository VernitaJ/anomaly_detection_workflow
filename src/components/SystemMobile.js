import React from "react";
import system from "../arrows/system.svg";
import styled from "styled-components";
import ModuleInfo from "./ModuleInfo";

const SystemMobile = () => {
  let [selected, setSelected] = React.useState(null);
  const items = [
    "Data Module",
    "Anomaly Detection Module",
    "Prediction Module",
  ];

  const handleClick = (e) => {
    selected === null || selected !== e.target.innerText
      ? setSelected(e.target.innerText)
      : setSelected(null);
  };

  return (
    <Container>
          <h4>System architecture</h4>
          <p>
            In an integrated smart anomaly detection system, the{" "}
            <b>Data module</b> provides the preprocessed input data to the{" "}
            <b>Prediction module</b>, which uses an API to get the predictions
            from a pre-trained machine learning model hosted on a server.{" "}
          </p>
          <p>
            These predictions are shared with the{" "}
            <b>Anomaly Detection module</b>, which uses suitable anomaly
            detection methods to identify any deviations from normal behavior
            and generate notifications/alerts if necessary. These alerts are
            delivered to relevant stakeholders so that they could take
            appropriate actions.
          </p>
          <p>
            The system can be continually improved by updating the machine
            learning model and fine-tuning the anomaly detection thresholds as
            new data becomes available.
          </p>
          {items.map((item) => (
            <ModuleInfo
              handleClick={handleClick}
              item={item}
              selected={selected}
            />
          ))}
        <img
          src={system}
          alt="Anomaly Detection Process"
          style={{ width: "40%" }}
        />
    </Container>
  );
};

export default SystemMobile;

const Container = styled.div`
img {
    position: relative;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px !important;
    margin-bottom: auto !important;
    padding-bottom: 30px;
}
`;

const Sidebar = styled.div`
  width: 50%;
  height: inherit;
  border-right: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: left;
  a {
    text-decoration: none;
    color: black;
  }
`;
