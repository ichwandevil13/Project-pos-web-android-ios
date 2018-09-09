import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "../../../components/CustomButtons/Button";
// styles for buttons on sweetalert
import sweetAlertStyle from "../../../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";

const codeExample = `import React from 'react';
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "../../../components/CustomButtons/Button";
// styles for buttons on sweetalert
import sweetAlertStyle from "../../../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle";

class SweetAlertDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }
  render(){
    return (
      <div>
        {this.state.alert}
        <Button color="rose" onClick={this.successAlert.bind(this)}>
          Try me!
        </Button>
      </div>
    );
  }
}

export default withStyles(sweetAlertStyle)(SweetAlertDemo);
`;

class SweetAlertDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }
  render() {
    return (
      <div>
        <h1>React Bootstrap Sweetalert 4.4.1</h1>
        <p>
          If you want to replace the classic alert box with something that looks
          amazing, you can use the React Bootstrap Sweet Alert Plugin. We have
          changed the typography and colors for the plugin provided by{" "}
          <a
            href="https://github.com/djorg83"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Jorgensens
          </a>. If you want to see the full documentation, please check out{" "}
          <a
            href="https://github.com/djorg83/react-bootstrap-sweetalert"
            target="_blank"
            rel="noopener noreferrer"
          >
            this page
          </a>.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-bootstrap-sweetalert.scss
          </code>.
        </p>
        <h2>Example</h2>
        {this.state.alert}
        <Button color="rose" onClick={this.successAlert.bind(this)}>
          Try me!
        </Button>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default withStyles(sweetAlertStyle)(SweetAlertDemo);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/SweetAlert