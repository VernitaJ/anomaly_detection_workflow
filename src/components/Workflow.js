import React from "react";
import WorkflowItem from "./WorkflowItem.js";
import Information from "./Information.js";
import items from "../items.json";

const Workflow = () => {
  let [information, setInformation] = React.useState(null);
  // create an array of components with name and description keys
  let components = [
    {
      name: "Requirements",
      description:
        "The requirements gathering process involves collecting and documenting the necessary features and functionalities of the system to be developed with the relevant stakeholders. The output of this step is a document containing the <strong>system requirements</strong>, which specifies the desired behavior and functionality of the system. The document should cover all relevant aspects of the system, such as input data sources, output formats, performance requirements, and any other relevant information.",
    },
    {
      name: "System Design",
      description:
        "The system design phase involves creating detailed specifications for the system based on the requirements document. This step includes defining the <strong>architecture</strong> of the system, choosing the appropriate <strong>technologies</strong> and <strong>tools</strong> to be used. The output of this step is a set of <strong>design documents</strong> that describe the system's structure and behavior, including a detailed description of the data flow through the system.",
    },
    {
      name: "Data Analysis",
      description:
        "The anomaly analysis phase involves analyzing the data to identify patterns and trends that may indicate anomalous behavior. This can be achieved using techniques such as time-series analysis, signal processing, and statistical modeling. The output of this step includes the results of the analysis, which may take the form of visualizations, time-series transformations, and summary statistics.",
    },
    {
      name: "Data Processing",
      description:
        "The data processing step involves preparing the input data for use in the machine learning model. This includes:\n- data cleaning\n  o Remove noise from the data [Software Eng for machine learning]\n  o Normalize timesteps to the preferred sample rate.\n- feature engineering\n  o Extract and select features for the machine learning model – this includes adding values of separate datasets if there is correlation between them.\n  o Normalize data where necessary (if two or more features are used and differ in margin)\nThe output of this step includes the training data, which is used to train the machine learning model, and the test data, which is used to evaluate the performance of the model. Additionally, the output may include a data detail report, which describes the distribution of the input data and any data preprocessing steps that were applied. Note that this step is repeated multiple times if numerous models are created for different datasets.",
    },
    {
      name: "Machine Learning Model",
      description:
        "The machine learning model is trained on the input data to predict time-series data. Two selections are made:\n\n1. Input sample\nThe amount of datapoints used to predict the future value, i.e., [datapoint 0-30]\n2. Timestep\nThe future timestep that is to be predicted, i.e.: how many timesteps into the future the model is required to predict, i.e., [60 datapoints] \nNote: These steps are repeated multiple times to find a timestep which can be accurately predicted.)\n\nThere are various machine learning algorithms that can be used for anomaly detection, such as LSTM and SVM. The output of this step is a trained model that can be used to predict a future value of the dataset. Models are trained and saved with their specified names, input sample, and timestep, i.e., ‘torque_30_60’, ‘torque_temperature_30_60’.\n\nAfter the model/s are trained, they are evaluated using the test data, and metrics analysed.\n\n1. Mean Squared Error (MSE): This metric measures the average squared difference between the predicted and actual values. It's a popular metric for regression problems and can be used to evaluate the overall accuracy of the model.\n\n",
    },
    {
      name: "Anomaly Classification",
      description:
        "The anomaly classification step involves defining the criteria for identifying anomalies and assigning severity scores to them. This can be achieved using techniques such as sliding time windows and thresholding. The output of this step includes the time windows used for classification and the severity thresholds assigned to different types of anomalies. The anomaly analysis phase provides information to base these decisions on.",
    },
    {
      name: "Testing",
      description:
        "During system evaluation <b>it</b> is recommended to append anomalous values into the dataset to find whether the model performs as expected, and the anomalies are identified.The output of this step includes test results, which describe the model's performance in terms of metrics such as accuracy, precision, and recall. Additionally, the output may include a metrics report, which summarizes the model's performance across multiple evaluation metrics.",
    },
    {
      name: "Deployment",
      description:
        "The deployment step involves releasing the anomaly detection system into production. This includes packaging the system and deploying it to the production environment. The output of this step includes a release version of the system and system statistics, which describe how the system is performing in production.",
    },
    {
      name: "Maintenance",
      description:
        "The maintenance step involves monitoring the performance of the anomaly detection system in production and adjusting as necessary. This includes retraining the machine learning model with new data and comparing its performance to the previous version. Additionally, the output of this step includes a performance report, which describes the system's performance over time, and a maintenance report, which documents any issues or changes made to the system during maintenance.",
    },
  ];

  const updateInformation = (item) => {
    setInformation(item);
  };
  return (
    <div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div
          style={{
            display: "flex",  overflowX: 'scroll'
          }}
        >
          {items.components.map((component) => (
            <WorkflowItem
              item={component}
              updateItem={updateInformation}
              current={information ? information.name : null}
            />
          ))}
        </div>
        <div
          style={{ height: "auto" }}
        >
          {information ? <Information item={information} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
