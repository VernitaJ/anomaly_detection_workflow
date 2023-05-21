import React from "react";

const AnomalyClassification = () => {
  return (
    <div>
      <p>
        The anomaly classification step involves defining the criteria for
        identifying anomalies and assigning severity scores to them. This can be
        achieved using techniques such as sliding time windows and thresholding.
        The anomaly analysis phase provides information to base these decisions
        on.
      </p>
      <p>
        When testing the anomaly classification it is recommended to append
        anomalous values into the dataset based on the findings from the anomaly
        analysis phase,to find whether the model performs as expected, and the
        anomalies are identified.
      </p>
      <h4>Dependencies</h4>
      <ol>
        <li>Analyses of the data - visualizations, metrics</li>
        <li>
          Trained ML model, to be aware of the error margins associated with the
          predictions
        </li>
        <li>Time windows, to be aware of the time intervals</li>{" "}
      </ol>
      <h4>Output</h4>
      <ol>
        <li>Anomaly Module - to be used in production and during retraining</li>
        <li>
          <b>Sliding time windows</b> to be used for classification
        </li>
        <li>
          <b>Severity thresholds</b> assigned to different types of anomalies.
        </li>
      </ol>

      <p>
        <strong>Example:</strong>{" "}
      </p>
      <p>
        Temperature shows repetitive patterns over 5min intervals. A{" "}
        <b>sliding window</b> of 5mins, 20mins, and 30mins is selected. Over
        5min intervals the mean difference of Temperature is 1.2deg.
      </p>
      <p>
        A <i>low severity</i> threshold of 1.5deg, <i>medium severity</i>{" "}
        threshold of 1.9deg, and <i>high severity</i> threshold of 2.5deg is
        selected.
      </p>
    </div>
  );
};

export default AnomalyClassification;
