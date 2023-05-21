import React from "react";

const Anomaly = () => {
  return (
    <div>
      <p>
        This module is responsible for processing the actual vs the predicted
        values in order to determine whether an anomaly is present in the data.
        This is done by comparing the current value to the predicted value, and
        utilising the <b>sliding time windows</b> and{" "}
        <b>predetermined thresholds</b> specified in the Anomaly Classification
        phase of the development process.
      </p>
      <p>
        {" "}
        The Anomaly Detection Module receives a predicted value from the
        Prediction Module, and once it receives the appropriate actual value
        from the Data Module, it compares the two values. If an anomaly is
        detected, the module initiates an investigation phase, which includes
        the following steps:
      </p>
      <h4>Interaction: </h4>
      <ol>
        <li>Receive actual value from the Data Module</li>
        <li>Receive predicted value from the ML Module</li>
        <li>Post an alert to the UI</li>
        <li>Send anomaly metrics to the ML Module</li>
      </ol>
    </div>
  );
};

export default Anomaly;
