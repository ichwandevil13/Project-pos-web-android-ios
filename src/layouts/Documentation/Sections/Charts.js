import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// core components
import { roundedLineChart } from "../../../variables/charts";

const codeExample = `import React from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// core components
import { roundedLineChart } from "../../../variables/charts";

function Charts({...props}){
  return (
    <ChartistGraph
      className="ct-chart"
      data={roundedLineChart.data}
      type="Line"
      options={roundedLineChart.options}
      listener={roundedLineChart.animation}
    />
  );
}

export default Charts;
`;

function Charts({ ...props }) {
  // const { } = props;
  return (
    <div>
      <h1>
        React Chartist v0.13.1, react wrapper component for Chartist v0.10.1
      </h1>
      <p>
        For the implementation of graphic charts, we used the Chartist plugin
        and added our custom styles. The plugin is free to download and use{" "}
        <a
          href="https://github.com/fraserxu/react-chartist"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>.{" "}
        <a
          href="https://github.com/fraserxu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fraser Xu
        </a>{" "}
        is the guy behind the project, he did an awesome job and we recommend
        using it his stuff. Besides all the great customisation that you have
        using it, it is also fully responsive. We changed the colors, background
        and typography.
      </p>
      <p>
        As you will see in the following examples, we put our variables for
        charts in <code>src/variables/charts</code>. Here you can find all
        variables for creating these charts. This module exports all chart
        variables together, and every variables by it's own. Please check this
        file to understand better.
      </p>
      <p>
        Please refer to{" "}
        <a
          href="https://github.com/fraserxu/react-chartist"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-chartist documentation
        </a>{" "}
        and{" "}
        <a
          href="https://gionkunz.github.io/chartist-js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          chartist documentation
        </a>{" "}
        for more information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-chartist.scss
        </code>.
      </p>
      <p>
        Here is a coded example (for more examples, take a look{" "}
        <Link to="/charts">here</Link>):
      </p>
      <ChartistGraph
        className="ct-chart"
        data={roundedLineChart.data}
        type="Line"
        options={roundedLineChart.options}
        listener={roundedLineChart.animation}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}

export default Charts;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Charts