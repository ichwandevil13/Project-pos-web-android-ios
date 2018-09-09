import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";

const codeImport = `import Clearfix from "../../../components/Clearfix/Clearfix";`;
const codeExample = `<Clearfix />`;

function Clearfix({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Clearfix</h1>
      <p>
        A clearfix is a way for an element to automatically clear its child
        elements, so that you don't need to add additional markup. It's
        generally used in float layouts where elements are floated to be stacked
        horizontally.
      </p>
      <p>
        You can see how it is used in our dashboard in{" "}
        <Link to="/user-page">User Profile Page</Link>, to make the button from
        the <code>Edit Profile Card</code> to have a "bottom margin".
      </p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImport}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
}

export default Clearfix;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Clearfix