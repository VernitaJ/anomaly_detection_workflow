import React from "react";

const AnomalyAnalysis = () => {
  return (
    <div>
      <p>
        The anomaly analysis phase involves analyzing the data to identify what
        an anomaly would look like, and hence the possible patterns and trends
        that may indicate anomalous behavior. It's vital to conduct a thorough
        analysis on non-anomalous data to identify what an anomaly would look
        like for a particular signal. This involves visualizing the data and
        conducting various analyses. Through these efforts, the sensor's normal
        patterns can be established, and window sizes can be initiated for use
        in the anomaly detection component.
      </p>
      <p>
        The stakeholder will work to identify relevant features in the data that
        may be useful in indicating anomalous behavior. This can be achieved
        using techniques such as <b>time-series analysis</b>,
        <b> signal processing</b>, and <b>statistical modeling</b>.
      </p>
      <h4>Output: </h4>
      <p>
        The output of this step includes the results of the analysis, which may
        take the form of <b>visualizations</b>, <b>transformations</b>,{" "}
        <b>metrics</b>, and relevant window sizes, which will be used throughout
        the development phase.
      </p>
      <h4>Tools:</h4>
      <ol>
        <li>Fast Fourier transformations</li>
        <ul>
          <li>
            Matlab:{" "}
            <a href="https://www.mathworks.com/help/matlab/ref/fft.html">fft</a>
          </li>
          <li>
            Scipy:{" "}
            <a href="https://docs.scipy.org/doc/scipy/tutorial/fft.html">
              scipy.fft
            </a>
          </li>
          <li>
            Numpy:{" "}
            <a href="https://numpy.org/doc/stable/reference/generated/numpy.fft.fft.html">
              numpy.fft.fft
            </a>
          </li>
        </ul>
        <li>
          Wavelet transforms - mathematical tools that can be used to analyze
          signals in both time and frequency domains.
          <ul>
            <li>
              <a href="https://pywavelets.readthedocs.io/en/latest/">
                PyWavelets
              </a>
              : a Python package for Wavelet transforms and related signal
              processing techniques.{" "}
            </li>
            <li>
              <a href="https://statweb.stanford.edu/~wavelab/">WaveLab</a>: a
              Matlab toolbox for Wavelet transforms and statistical signal
              processing.{" "}
            </li>
            <li>
              <a href="https://www.mathworks.com/help/wavelet/wavelet-analysis.html">
                MATLAB Wavelet Toolbox
              </a>
              : a built-in toolbox in Matlab for Wavelet transforms.{" "}
            </li>
          </ul>
        </li>
        <li>
          Principal Component Analysis (PCA)- statistical technique used to
          identify patterns in high-dimensional data
          <ul>
            <li>
              <a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html">
                Scikit-learn:
              </a>{" "}
              a Python library that includes PCA and other machine learning
              algorithms.{" "}
            </li>
            <li>
              <a href="https://www.mathworks.com/help/stats/principal-component-analysis-pca.html">
                Statistics and Machine Learning Toolbox
              </a>
              : a built-in toolbox in Matlab for PCA and other statistical and
              machine learning algorithms.{" "}
            </li>
            <li>
              <a href="https://cran.r-project.org/web/packages/FactoMineR/index.html">
                R packages
              </a>
              : several R packages, including FactoMineR and PCA, provide PCA
              functionality.{" "}
            </li>
          </ul>
        </li>
        <li>
          Machine learning algorithms - Various machine learning algorithms can
          be used to identify anomalous behavior in data. To be used when
          anomalous datapoints are present in the dataset.
          <ul>
            <li>
              Scikit-learn: a Python library that includes many machine learning
              algorithms, including clustering algorithms, decision trees, and
              neural networks.{" "}
              <a href="https://scikit-learn.org/stable/">
                https://scikit-learn.org/stable/
              </a>
            </li>
            <li>
              <a href="https://keras.io/">Keras</a>: a Python deep learning
              library that can be used to implement neural networks.{" "}
            </li>
            <li>
              <a href="https://www.tensorflow.org/">TensorFlow</a>: an
              open-source platform for machine learning, including neural
              networks and other algorithms.{" "}
            </li>

            <li>
              <a href="https://cran.r-project.org/web/packages/caret/index.html">
                caret
              </a>
              : an R package that provides a unified interface to many machine
              learning algorithms.
            </li>
          </ul>
        </li>
        <li>
          Data visualization tools - can be used to visualize the data and
          identify any trends or patterns.
          <ul>
            <li>
              <a href="https://www.tableau.com/">Tableau</a>: a powerful data
              visualization tool that can connect to various data sources and
              create interactive visualizations.
            </li>
            <li>
              <a href="https://powerbi.microsoft.com/">Power BI</a>: a business
              analytics service provided by Microsoft that includes data
              visualization tools.
            </li>
            <li>
              <a href="https://ggplot2.tidyverse.org/">ggplot2</a>: an R package
              for creating high-quality, customizable data visualizations.
            </li>
          </ul>
        </li>
        <li>
          Statistical process control charts - charts used to monitor a process
          over time and identify any unusual patterns or trends that may
          indicate anomalous behavior. Examples include control charts, cusum
          charts, and EWMA charts.
          <ul>
            <li>
              <a href="https://cran.r-project.org/web/packages/qcc/index.html">
                qcc
              </a>
              : an R package for statistical process control that includes many
              types of control charts.
            </li>
            <li>
              <a href="https://www.minitab.com/en-us/products/minitab/">
                Minitab
              </a>
              : a statistical software package that includes tools for
              statistical process control.
            </li>
            <li>
              <a href="https://www.jmp.com/en_us/home.html">JMP</a>: a data
              analysis software package that includes tools for statistical
              process control.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default AnomalyAnalysis;
