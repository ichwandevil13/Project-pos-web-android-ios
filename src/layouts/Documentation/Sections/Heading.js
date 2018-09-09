import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeImport = `import Heading from "../../../components/Heading/Heading";`;
const codeExample = `<Heading
  textAlign="center"
  title="Title"
  category="content/subtitle"
/>`;
const codeProps = `Heading.propTypes = {
  title: PropTypes.node,
  category: PropTypes.node,
  textAlign: PropTypes.oneOf(["right", "left", "center"])
};`;

function Heading({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Heading</h1>
      <p>
        This component was made by us to make it easier to write the heading
        part of some pages from our dashboard views.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/headingStyle
        </code>.
      </p>
      <h2>Usage</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImport}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Heading;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Heading