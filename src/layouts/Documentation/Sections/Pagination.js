import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

import Paginations from "../../../components/Pagination/Pagination";

const codeExample = `import React from 'react';

import Paginations from "../../../components/Pagination/Pagination";

function Example({...props}){
  return (
    <Paginations
      pages={[
        { text: "PREV" },
        { text: 1 },
        { text: 2 },
        { active: true, text: 3 },
        { text: 4 },
        { text: 5 },
        { text: "NEXT" }
      ]}
      color="info"
    />
  );
}

export default Example;`;
const codeProps = `Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."])
      ]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};`;

function Pagination({ ...props }) {
  return (
    <div>
      <h1>Pagination</h1>
      <p>
        We've created this special component due to the fact that you would have
        needed to write a lot of code to obtain a small component. So, it was
        done to make your life easier.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/paginationStyle
        </code>.
      </p>
      <h2>Example</h2>
      <Paginations
        pages={[
          { text: "PREV" },
          { text: 1 },
          { text: 2 },
          { active: true, text: 3 },
          { text: 4 },
          { text: 5 },
          { text: "NEXT" }
        ]}
        color="info"
      />
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

export default Pagination;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Pagination