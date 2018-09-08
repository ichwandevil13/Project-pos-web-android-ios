import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react plugin that creates slider
import Nouislider from "react-nouislider";

const codeExample = `import React from 'react';
// react plugin that creates slider
import Nouislider from "react-nouislider";

function Sliders({...props}){
  return (
    <div>
      <Nouislider
        start={[40]}
        connect={[true, false]}
        step={1}
        range={{ min: 0, max: 100 }}
      />
      <br />
      <div className="slider slider-info">
        <Nouislider
          start={[20, 60]}
          connect={[false, true, false]}
          step={1}
          range={{ min: 0, max: 100 }}
        />
      </div>
    </div>
  );
}

export default Sliders;
`;

function Sliders({ ...props }) {
  // const { } = props;
  return (
    <div>
      <h1>React noUiSlider v2.0.1</h1>
      <p>
        For this component we've used a{" "}
        <a
          href="https://refreshless.com/nouislider/"
          target="_blank"
          rel="noopener noreferrer"
        >
          noUiSlider
        </a>{" "}
        react component,{" "}
        <a
          href="https://github.com/algolia/react-nouislider"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-nouislider
        </a>, and we've restyled to match our theme.
      </p>
      <p>
        Please refer to{" "}
        <a
          href="https://github.com/algolia/react-nouislider"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-nouislider documentation
        </a>{" "}
        and/or{" "}
        <a
          href="https://refreshless.com/nouislider/"
          target="_blank"
          rel="noopener noreferrer"
        >
          noUiSlider
        </a>{" "}
        for more information.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/plugins/_plugin-nouislider.scss
        </code>.
      </p>
      <h2>Example</h2>
      <Nouislider
        start={[40]}
        connect={[true, false]}
        step={1}
        range={{ min: 0, max: 100 }}
      />
      <br />
      <div className="slider slider-info">
        <Nouislider
          start={[20, 60]}
          connect={[false, true, false]}
          step={1}
          range={{ min: 0, max: 100 }}
        />
      </div>
      <p>
        If you want to add color to your slider you need to wrapp the{" "}
        <code>Nouislider</code> in a <code>div</code> with the{" "}
        <code>className</code> and <code>"slider slider-$color"</code>, where{" "}
        <code>$color</code> can be one of <code>primary</code>,{" "}
        <code>info</code>, <code>success</code>, <code>warning</code>,{" "}
        <code>danger</code>.
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}

export default Sliders;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Sliders