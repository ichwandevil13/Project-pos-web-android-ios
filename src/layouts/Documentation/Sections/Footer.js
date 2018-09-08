import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeProps = `Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};
`;

function Footer({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Footer</h1>
      <p>This is the bottom navigation of our demo app.</p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/footerStyle
        </code>.
      </p>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Footer;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Footer