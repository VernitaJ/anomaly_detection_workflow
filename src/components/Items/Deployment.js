import React from "react";
import deployment_diagram from "../../images/cicd.png";

const Deployment = () => {
  return (
    <div>
      <p>
        The deployment step involves releasing the anomaly detection system into
        production. It's vital that this process is initialised after the
        verification of the system has been completed to ensure that the system
        is ready for production.
      </p>
      <p>
        The deployment process involves pushing the packaged system to the
        production environment which initialises the{" "}
        <a href="https://confluence.esss.lu.se/display/CSI/Development+Workflow+-+An+overview+of+recommended+SW+to+use">
          CI/CD workflow
        </a>{" "}
        (link to confluence page).
      </p>
      <h4>CI/CD Workflow: </h4>
      <div>
        <img src={deployment_diagram} alt="deployment" width="100%"></img>
      </div>

      <h4>Output: </h4>
      <ol>
        <li>
          <b>Hosted Application</b> - The production environment is available and ready for use.
        </li>
      </ol>
    </div>
  );
};

export default Deployment;
