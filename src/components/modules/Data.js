import React from "react";

const Data = () => {
  return (
    <div>
      <p>
        This module is responsible for collecting, processing, and transforming
        the data that will be used for predictions. The module contains the
        relevant functionality necessary to process the data for retraining the
        machine learning model.
      </p>
      <p>
        <a href="https://epics.anl.gov/base/R3-14/12-docs/AppDevGuide/node4.html#SECTION00435000000000000000">
          Channel Access
        </a>{" "}
        is used to connect to the Input/Output Controller (IOC) in the
        Experimental Physics and Industrial Control System (EPICS). Through this
        server, the specified process variable/s (PV) is/are accessed,
        whereafter the required processing is performed. It is advised for the
        module to process the data in the same format as that used for the
        Machine Learning Model, which allows for reusability of the the data
        processing functionality.
      </p>
      <p>
        Within this module, quality and consistency of the data can be assessed
        if required.
      </p>
      <h4>Interaction: </h4>
      <ol>
        <li>
          Retrieves data from the Control System via the Channel Access server.
        </li>
        <li>
          Sends packaged data to the Machine Learning Module for prediction.
        </li>
        <li>Sends the current value to the Anomaly Detection Module.</li>
      </ol>
    </div>
  );
};

export default Data;
