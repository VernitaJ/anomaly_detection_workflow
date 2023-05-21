import React from "react";

const Prediction = () => {
  return (
    <div>
      <p>
        This module is responsible for performing the actual prediction, as well
        as the post-processing of the predicted values. The module receives the
        data from the Data module, and sends a request to the deployed ML model
        to perform the prediction. The predicted values are sent to the
        Anomaly Detection module for comparison with the actual values.
      </p>
      <h4>Output: </h4>
      <p>
        The output of this step includes the results of the analysis, which may
        take the form of visualizations, time-series transformations, and
        summary statistics.
      </p>
    </div>
  );
};

export default Prediction;
