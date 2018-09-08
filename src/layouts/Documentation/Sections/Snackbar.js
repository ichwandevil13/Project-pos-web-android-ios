/*eslint-disable*/
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import SnackbarContent from "../../../components/Snackbar/SnackbarContent";
import Snackbars from "../../../components/Snackbar/Snackbar";
import Button from "../../../components/CustomButtons/Button";

const codeImportSnackbarContent = `import SnackbarContent from "../../../components/Snackbar/SnackbarContent";
import AddAlert from "@material-ui/icons/AddAlert";`;
const codeExampleStyles = `<SnackbarContent
  message={"This is a plain notification"}
  color="info"
/>
<SnackbarContent
  message={"This is a notification with close button."}
  close
  color="info"
/>
<br />
<SnackbarContent
  message={"This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."}
  close
  icon={AddAlert}
  color="info"
/>
<br />
<SnackbarContent
  message={'This is a notification with close button and icon and is made with color="rose". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.'}
  close
  icon={AddAlert}
  color="rose"
/>`;
const codeExampleStates = `<SnackbarContent
  message={'INFO - This is a regular notification made with color="info"'}
  close
  color="info"
/>
<SnackbarContent
  message={'SUCCESS - This is a regular notification made with color="success"'}
  close
  color="success"
/>
<SnackbarContent
  message={'WARNING - This is a regular notification made with color="warning"'}
  close
  color="warning"
/>
<SnackbarContent
  message={'DANGER - This is a regular notification made with color="danger"'}
  close
  color="danger"
/>
<SnackbarContent
  message={'PRIMARY - This is a regular notification made with color="primary"'}
  close
  color="primary"
/>
<SnackbarContent
  message={'ROSE - This is a regular notification made with color="primary"'}
  close
  color="rose"
/>`;
const codePropsSnackbarContent = `SnackbarContent.defaultProps = {
  color: "info"
};

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "info",
    "success",
    "warning",
    "danger",
    "primary",
    "rose"
  ]),
  // this is used to create the close button
  close: PropTypes.bool,
  icon: PropTypes.func
};`;
const codeExampleSnackbar = `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { prism } from 'react-syntax-highlighter/styles/prism';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Snackbars from "../../../components/Snackbar/Snackbar";
import Button from "../../../components/CustomButtons/Button";

class Example extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
    };
  }
  showNotification(place) {
    if(!this.state[place]){
      var x = [];
      x[place] = true;
      this.setState(x);
      // use this to make the notification autoclose
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  render(){
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.showNotification("tl")}>
          Top Left
        </Button>
        <Snackbars
          place="tl"
          color="info"
          icon={AddAlert}
          message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
          open={this.state.tl}
          closeNotification={() => this.setState({ tl: false })}
          close
        />
      </div>
    );
  }
}

export default Example;
`;
const codePropsSnackbar = `Snackbar.defaultProps = {
  color: "info"
};

Snackbar.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "info",
    "success",
    "warning",
    "danger",
    "primary",
    "rose"
  ]),
  // this is used to create the close button
  close: PropTypes.bool,
  icon: PropTypes.func,
  place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: PropTypes.bool
};`;

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false
    };
  }
  showNotification(place) {
    if (!this.state[place]) {
      var x = [];
      x[place] = true;
      this.setState(x);
      // use this to make the notification autoclose
      setTimeout(
        function() {
          x[place] = false;
          this.setState(x);
        }.bind(this),
        6000
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Snackbar and SnackbarContent</h1>
        <p>
          We've decided to extend these components from{" "}
          {
            " "
            // eslint-disable-next-line
          }
          <a
            href="https://material-ui-next.com/demos/snackbars/"
            target="_blank"
          >
            material-ui
          </a>{" "}
          due to the fact that there would have been a lot of styles to be
          applied to them.
        </p>
        <h2>SnackbarContent</h2>
        <p>
          This can be used to create <code>static</code> notifications.
        </p>
        <h3>Styles</h3>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/jss/material-dashboard-pro-react/components/snackbarContentStyle
          </code>.
        </p>
        <h3>Import</h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeImportSnackbarContent}
        </SyntaxHighlighter>
        <h3>Styles</h3>
        <SnackbarContent
          message={"This is a plain notification"}
          color="info"
        />
        <SnackbarContent
          message={"This is a notification with close button."}
          close
          color="info"
        />
        <br />
        <SnackbarContent
          message={
            "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
          }
          close
          icon={AddAlert}
          color="info"
        />
        <br />
        <SnackbarContent
          message={
            'This is a notification with close button and icon and is made with color="rose". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don\'t have to worry about the style.'
          }
          close
          icon={AddAlert}
          color="rose"
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleStyles}
        </SyntaxHighlighter>
        <h3>States</h3>
        <SnackbarContent
          message={
            'INFO - This is a regular notification made with color="info"'
          }
          close
          color="info"
        />
        <SnackbarContent
          message={
            'SUCCESS - This is a regular notification made with color="success"'
          }
          close
          color="success"
        />
        <SnackbarContent
          message={
            'WARNING - This is a regular notification made with color="warning"'
          }
          close
          color="warning"
        />
        <SnackbarContent
          message={
            'DANGER - This is a regular notification made with color="danger"'
          }
          close
          color="danger"
        />
        <SnackbarContent
          message={
            'PRIMARY - This is a regular notification made with color="primary"'
          }
          close
          color="primary"
        />
        <SnackbarContent
          message={
            'ROSE - This is a regular notification made with color="primary"'
          }
          close
          color="rose"
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleStates}
        </SyntaxHighlighter>
        <h3>Props</h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePropsSnackbarContent}
        </SyntaxHighlighter>
        <h2>Snackbar</h2>
        <p>
          This can be used to create <code>dynamic</code> notifications.
        </p>
        <h3>Styles</h3>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/jss/material-dashboard-pro-react/components/snackbarContentStyle
          </code>.
        </p>
        <h3>Example</h3>
        <Button color="primary" onClick={() => this.showNotification("tl")}>
          Top Left
        </Button>
        <Snackbars
          place="tl"
          color="info"
          icon={AddAlert}
          message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
          open={this.state.tl}
          closeNotification={() => this.setState({ tl: false })}
          close
        />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleSnackbar}
        </SyntaxHighlighter>
        <h3>Props</h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codePropsSnackbar}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default Snackbar;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Snackbar