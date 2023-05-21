import React, { useState } from "react";
import styled from "styled-components";
import lstm from "../../images/lstm.png";
import svm from "../../images/svm.png";

const MLModel = () => {
  let [selected, setSelected] = useState("Training");
  return (
    <div>
      <p>
        The data from the previous phase is used to train a machine learning
        model. The model is then used to predict future values of the
        time-series data, and is evaluated. These steps are repeated with
        different parameters until satisfactory metrics are achieved.
      </p>
      <p>
        The <b>ML Module</b> is created after the model is trained, which
        comprises the hosted model and prediction functions, as well as the
        retraining functionalities used during the maintenance phase.
      </p>
      <Flow>
        <Item
          onClick={() => setSelected("Training")}
          style={
            selected === "Training"
              ? { border: "2px solid gray" }
              : { boder: "2px solid white" }
          }
        >
          <h4>Model Training</h4>
        </Item>
        <Item
          onClick={() => setSelected("Testing")}
          style={
            selected === "Testing"
              ? { border: "2px solid gray" }
              : { boder: "2px solid white" }
          }
        >
          <h4>Model Evaluation</h4>
        </Item>
        <Item
          onClick={() => setSelected("Module")}
          style={
            selected === "Module"
              ? { border: "2px solid gray" }
              : { boder: "2px solid white" }
          }
        >
          <h4>ML Module</h4>
        </Item>
      </Flow>
      {selected === "Training" ? (
        <div>
          <h4>Dependencies</h4>
          <ol>
            <li>Training Data</li>
            <li>Testing Data</li>
          </ol>
          <b>Model Architecture</b>
          <p>
            There are various machine learning algorithms that can be used for
            time-series prediction, such as <b>LSTM</b> and <b>SVM</b>.
          </p>
          <ul>
            <li>
              <h4>Long Short-Term Memory (LSTM)</h4>
              <p>
                <a href="https://www.turing.com/kb/comprehensive-guide-to-lstm-rnn">
                  LSTM
                </a>{" "}
                is a type of recurrent neural network (RNN) that can be used for
                time series prediction. It is designed to overcome the problem
                of vanishing gradients that can occur in traditional RNNs. LSTM
                uses a memory cell to store information over time and can
                selectively forget or remember past information. This makes it
                particularly useful for time series prediction, where past
                values are often important predictors of future values.
              </p>
              <img src={lstm} width="50%" alt="lstm model"></img>
              <p>Some popular tools for implementing LSTM include:</p>
              <ul>
                <li>
                  <a href="https://www.tensorflow.org/">TensorFlow</a>: an open
                  source machine learning platform that includes tools for
                  building and training deep learning models.
                </li>
                <li>
                  <a href="https://keras.io/">Keras</a>: a high-level neural
                  networks API written in Python that can run on top of
                  TensorFlow.
                </li>
                <li>
                  <a href="https://pytorch.org/">PyTorch</a>: an open source
                  machine learning framework that uses a dynamic computation
                  graph.
                </li>
              </ul>
            </li>
            <li>
              <h4>Support Vector Machines (SVM)</h4>
              <p>
                <a href="http://www.neural-forecasting.com/support_vector_machines.htm">
                  SVM
                </a>{" "}
                is a machine learning algorithm that can be used for time series
                prediction. It works by finding the hyperplane that maximally
                separates the data into different classes. In the case of time
                series prediction, SVM can be used to find a hyperplane that
                separates the past values of a series from its future values.
              </p>
              <img src={svm} width="50%" alt="svm model"></img>
              <p>Some popular tools for implementing SVM include:</p>
              <ul>
                <li>
                  <a href="https://scikit-learn.org/stable/">scikit-learn</a>: a
                  machine learning library for Python that includes tools for
                  implementing SVM and other algorithms.
                </li>
                <li>
                  <a href="https://www.mathworks.com/products/matlab.html">
                    MATLAB
                  </a>
                  : a programming language and environment for numerical
                  computing that includes tools for implementing SVM and other
                  algorithms.
                </li>
                <li>
                  <a href="https://www.gnu.org/software/octave/">GNU Octave</a>:
                  a high-level programming language for numerical computations
                  that is compatible with MATLAB.
                </li>
              </ul>
            </li>
          </ul>
          <h4>Output</h4>
          <ol>
            <li>
              <b>Trained model/s</b> that can be used to predict a future value
              of the dataset. Models should be saved with their specified names,
              input sample, and timestep, i.e., &lsquo;torque_30_60&rsquo;,
              &lsquo;torque_temperature_30_60&rsquo; for transparency and
              traceability.
            </li>
          </ol>
        </div>
      ) : selected === "Testing" ? (
        <div>
          <h4>Dependencies</h4>
          <ol>
            <li>Trained Model</li>
          </ol>
          <p>
            After the model/s are trained, they are evaluated using the test
            data, and metrics analysed. Some metrics to consider are:
          </p>
          <p>
            1. Mean Squared Error (MSE): This metric measures the average
            squared difference between the predicted and actual values. It's a
            popular metric for regression problems and can be used to evaluate
            the overall accuracy of the model.
          </p>
          <p>
            2. Root Mean Squared Error (RMSE): This metric calculates the square
            root of the MSE, which provides the error in the same units as the
            data. It's a good metric to use when you want to compare the
            performance of different models.
          </p>
          <p>
            3. Mean Absolute Error (MAE): This metric measures the absolute
            difference between the predicted and actual values, regardless of
            the direction of the error. It's also a popular metric for
            regression problems.
          </p>
          <p>
            4. Mean Absolute Percentage Error (MAPE): This metric measures the
            percentage difference between the predicted and actual values. It's
            a good metric to use when you want to compare the performance of the
            model across different datasets.
          </p>
          <p>
            5. Coefficient of Determination (R-squared): This metric measures
            the proportion of the variance in the dependent variable that is
            predictable from the independent variables. It's a good metric to
            use when you want to evaluate how well the model fits the data.
          </p>
          <p>
            6. Symmetric Mean Absolute Percentage Error (SMAPE): This metric
            measures the percentage difference between the predicted and actual
            values, but it takes into account the magnitude of the values. It's
            a good metric to use when the magnitude of the values is important.
          </p>
          <p>
            It's recommended to use multiple metrics to get a more comprehensive
            understanding of how well the model is performing.
          </p>
          <p>This process is iterated until a sufficient model is trained.</p>
        </div>
      ) : (
        <div>
          <h4>Dependencies</h4>
          <ol>
            <li>Trained Model</li>
            <li>Data Module</li>
          </ol>

          <p>
            The ML Module is used during production to predict the future
            timestep. It contains the server access to the hosted model/s, with
            the ability to process the prediction and apply the updated
            prediction to the UI. It also contains the functionality to retrain
            the model when required by integrating with the Data Module.{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default MLModel;

const Item = styled.div`
  width: 20%;
  background-color: #f5f5f5;
  vertical-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    border: 1px solid #000000;
  }
`;
const Flow = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 50px;
`;
