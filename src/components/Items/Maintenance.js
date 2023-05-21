import React from "react";

const Maintenance = () => {
  return (
    <div>
      <p>
        The maintenance step involves the monitoring of the system in
        production, which includes monitoring for problems in integration or
        functionality, and updating the system as needed. This update includes
        the potential retraining of the machine learning model to ensure that it
        is accurate and effective.
      </p>
      <p>
        Anomaly detection functionalities are also tested by monitoring feedback
        from the user of the system. This feedback is stored in the local
        database and can be used to increase the accuracy of the system over
        time.
      </p>
      <p>
        The retraining of the machine learning model entails retrieving data
        from the <b>Archiver</b>, and triggering a retraining. Thereafter the
        metrics of the new model are compared to the previous version.
      </p>

      <h4>Output: </h4>
      <p>
        <b>Monitoring Metrics</b>, which describes the system's performance over
        time, and a <b>maintenance report</b>, which documents any issues or
        changes made to the system during maintenance.
      </p>
    </div>
  );
};

export default Maintenance;
