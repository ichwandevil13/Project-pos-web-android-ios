import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import Badges from "../../../components/Badge/Badge";

const codeImport = `import Badge from "../../../components/Badge/Badge";`;
const codeExample = `<Badge>gray</Badge>
<Badge color="primary">primary</Badge>
<Badge color="warning">warning</Badge>
<Badge color="danger">danger</Badge>
<Badge color="success">success</Badge>
<Badge color="info">info</Badge>
<Badge color="rose">rose</Badge>`;
const codeProps = `Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};`;

function Badge({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Badge</h1>
      <p>This component was added by us.</p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          assets/jss/material-dashboard-pro-react/components/badgeStyle
        </code>.
      </p>
      <h2>Example</h2>
      <Badges>gray</Badges>
      <Badges color="primary">primary</Badges>
      <Badges color="warning">warning</Badges>
      <Badges color="danger">danger</Badges>
      <Badges color="success">success</Badges>
      <Badges color="info">info</Badges>
      <Badges color="rose">rose</Badges>
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

export default Badge;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Badge