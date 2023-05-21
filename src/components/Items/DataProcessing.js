import React from "react";
import timestep from "../../images/timestep_input_sample.png";
import data_architecture from "../../images/data_architecture.svg";
import styled from "styled-components";
import create_set from "../../images/create_set.png";

const DataProcessing = () => {
  return (
    <Container>
      <p>
        The data processing step involves collecting and preparing the input
        data for use in the machine learning model, as well as developing the{" "}
        <b>Data Module</b> which will be used in the production environment.
      </p>
      <h4>Dependencies</h4>
      <ol>
        <li>Data Analysis metrics</li>
        <li>Channel Access to the Archiver</li>
      </ol>
      <h4>Data Architecture</h4>
      <p>
        The Data Architecture is significant, as the Data Module will be
        utilising archived data for training the model, as well as real-time
        data during time-series prediction. The{" "}
        <a href="https://epics.anl.gov/base/R3-14/12-docs/AppDevGuide/node4.html#SECTION00410000000000000000">
          Experimental Physics and Industrial Control System (EPICS)
        </a>{" "}
        is used to manage the data flow in the control systems of the facility.
        The EPICS Archiver is used to store relevant data from the control
        system in a database.
      </p>
      <img src={data_architecture} width="40%" alt="Data Architecture"></img>
      <h4>ML Model data processing:</h4>
      <ol>
        <li>
          <b>Data collection</b>
          <ul>
            <li>
              <a href="https://epics.anl.gov/base/R3-14/12-docs/AppDevGuide/node4.html#SECTION00435000000000000000">
                Channel Access
              </a>{" "}
              is used to access the archived data from the control system. The
              data is then stored in a local database.
            </li>
          </ul>
        </li>
        <li>
          <b>Data cleaning</b>
        </li>
        <ul>
          <li>
            Remove noise from the data, i.e., remove outliers, missing values
          </li>
          <li>Normalize timesteps to the preferred sample rate. </li>
        </ul>
        <li>
          <b>Feature engineering</b>
        </li>
        <ul>
          <li>
            Extract and select features for the machine learning model &ndash;
            this includes adding values of separate datasets if there is
            correlation between them.
          </li>
          <li>Normalize data where necessary</li>
          <li>
            Select the input sample and timestep for the prediction. These steps
            are repeated multiple times to find a timestep which can be
            accurately predicted.
            <ol>
              <li>
                <b>Input sample</b> - The amount of datapoints used to predict
                the future value, i.e., [datapoint 0-24]{" "}
              </li>
              <li>
                <b>Timestep </b> (Offset) - The future datapoint that is to be
                predicted, i.e.: how many timesteps into the future the model is
                required to predict, i.e., [24 datapoints]
              </li>
              <p>Sample:</p>
              <img src={timestep} width="50%"></img>
            </ol>
            <p>
              Example code block for creating sets using the input sample and
              timestep:
            </p>
            <img src={create_set} width="50%"></img>
          </li>
        </ul>
      </ol>
      <h4>Output: </h4>
      <ol>
        <li>
          Training and validation data - used to train the machine learning
          model
        </li>
        <li>Testing data - used to evaluate the performance of the model</li>
        <li>
          <b>Data Module</b> - to be used during production and prediction, as
          well as retraining
        </li>
        <li>Data metrics report - (optional)</li>
      </ol>
      <p>
        <i>
          <b>Note - </b>Data Processing is repeated multiple times if numerous
          models are created for different datasets.
        </i>
      </p>
      <p>
        <h4>Example</h4>Torque and Temperature datasets are processed, and a
        correlation of -0.75 is identified.{" "}
        <ol>
          <li>Torque training and testing dataset is created. </li>
          <li>Temperature training and testing dataset is created.</li>
          <li>
            Torque and Temperature datasets are normalized using MinMax
            normalization.
          </li>
          <li>Datasets are combined as such: torque, temperature, timestamp</li>
          <li>
            {" "}
            Torque&amp;Temperature training and testing dataset is created.
          </li>
        </ol>
      </p>
      <h4>Tools:</h4>
      <ul>
        <li>
          <a href="https://www.tensorflow.org/">TensorFlow</a>: an open-source
          machine learning framework developed by Google that can be used for
          data processing, model training, and deployment.
        </li>
        <li>
          <a href="https://pytorch.org/">PyTorch</a>: another popular
          open-source machine learning framework that includes tools for data
          processing and model training.
        </li>
        <li>
          <a href="https://www.scipy.org/">SciPy</a>: a scientific computing
          library for Python that includes modules for data processing,
          optimization, and statistics.
        </li>
        <li>
          <a href="https://numpy.org/">NumPy</a>: a Python library for numerical
          computing that includes tools for data processing and manipulation.
        </li>
        <li>
          <a href="https://pandas.pydata.org/">pandas</a>: a Python library for
          data manipulation and analysis that includes tools for data
          processing, cleaning, and normalization.
        </li>
        <li>
          <a href="https://www.r-project.org/">R</a>: a programming language and
          software environment for statistical computing and graphics that
          includes many packages for data processing and analysis.
        </li>
        <li>
          <a href="https://spark.apache.org/">Apache Spark</a>: an open-source
          distributed computing system that includes tools for data processing,
          machine learning, and graph processing.
        </li>
        <li>
          <a href="https://www.knime.com/">KNIME Analytics Platform</a>: an
          open-source data analytics platform that includes tools for data
          processing, visualization, and machine learning.
        </li>
        <li>
          <a href="https://www.rapidminer.com/">RapidMiner</a>: an open-source
          data science platform that includes tools for data processing, machine
          learning, and predictive analytics.
        </li>
        <li>
          <a href="https://www.sas.com/en_us/software/viya.html">SAS Viya</a>: a
          cloud-based platform for data processing, analytics, and machine
          learning.
        </li>
        <li>
          <a href="https://www.mathworks.com/products/matlab.html">MATLAB</a>: a
          programming language and computing environment for numerical computing
          and visualization that includes tools for data processing, analysis,
          and modeling.
        </li>
      </ul>
    </Container>
  );
};

export default DataProcessing;

let Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  img {
    margin: 2rem;
  }
`;
