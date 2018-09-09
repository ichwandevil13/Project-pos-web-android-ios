/*eslint-disable*/
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeProps = `Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool
};`;
const codePropsPages = `Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
};`;

function Header({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Header</h1>
      <p>
        This is the top navigation of our demo app for the{" "}
        <code>Dashboard</code> layout component.
      </p>
      <p>
        It was made using{" "}
        {
          " "
          // eslint-disable-next-line
        }
        <a href="https://material-ui-next.com/demos/app-bar/" target="_blank">
          Mayterial-UI's AppBat
        </a>, but with some custom styling.
      </p>
      <p>
        You will find this component in{" "}
        <code>src/components/Header/Header</code>. In this component there
        is just the structure of the navbar. The links can be found in{" "}
        <code>src/components/Header/HeaderLinks</code>. We've done this
        because on responsive we want both the links from <code>Navbar</code>{" "}
        and those from <code>Sidebar</code> components to be displayed.
      </p>
      <p>
        You can choose between 5 colors by using the <code>color</code>{" "}
        property.
      </p>
      <p>If this property is not set, then the Appbar will be transparent.</p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/headerStyle
        </code>.
      </p>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
      <h1>PagesHeader</h1>
      <p>
        This is the top navigation of our demo app for the <code>Pages</code>{" "}
        layout component.
      </p>
      <p>
        You will find this component in{" "}
        <code>src/components/Header/PagesHeader</code>
      </p>
      <p>
        It's made like the <code>Header</code> component but the difference is
        that the links in this component are made dynamically using{" "}
        <code>src/routes/pages</code>.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/pagesHeaderStyle
        </code>.
      </p>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codePropsPages}
      </SyntaxHighlighter>
    </div>
  );
}

export default Header;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Header