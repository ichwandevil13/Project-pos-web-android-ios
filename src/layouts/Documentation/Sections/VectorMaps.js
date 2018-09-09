import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

const codeExample = `import React from 'react';
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920
};

function VectorMaps({...props}){
  return (
    <VectorMap
      map={"world_mill"}
      backgroundColor="transparent"
      zoomOnScroll={false}
      containerStyle={{
        width: "100%",
        height: "420px"
      }}
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      }}
      series={{
        regions: [
          {
            values: mapData,
            scale: ["#AAAAAA", "#444444"],
            normalizeFunction: "polynomial"
          }
        ]
      }}
    />
  );
}

export default VectorMaps;
`;

function VectorMaps({ ...props }) {
  // const { } = props;
  return (
    <div>
      <h1>React jVectorMap v0.0.3</h1>
      <p>
        React wrapper component for{" "}
        <a
          href="http://jvectormap.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          jVectorMap
        </a>. Looks great on any resolution.
      </p>
      <p>
        For details please refer to{" "}
        <a
          href="https://github.com/kadoshms/react-jvectormap"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-jvectormap official documentation
        </a>{" "}
        and/or{" "}
        <a
          href="http://jvectormap.com/documentation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          jvectormap official documentation
        </a>.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-jvectormap.scss
        </code>.
      </p>
      <h2>Example</h2>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "420px"
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          }
        }}
        series={{
          regions: [
            {
              values: mapData,
              scale: ["#AAAAAA", "#444444"],
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}

export default VectorMaps;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/VectorMaps