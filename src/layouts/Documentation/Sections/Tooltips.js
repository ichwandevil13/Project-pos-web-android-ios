/* eslint-disable */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Refresh from "@material-ui/icons/Refresh";
// core components
import Button from "../../../components/CustomButtons/Button";

import { tooltip } from "../../../assets/jss/material-dashboard-pro-react";

const styles = {
  tooltip
};

const codeExample = `import React from "react";
// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import Tooltip from 'material-ui/Tooltip';
// @material-ui/icons
import Refresh from "@material-ui/icons/Refresh";
// core components
import Button from "../../../components/CustomButtons/Button";

import {
  tooltip
} from "../../../assets/jss/material-dashboard-pro-react";

const styles = {
  tooltip
};

class Tooltips extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Tooltip
          id="tooltip-top"
          title="Refresh"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="infoNoBackground" justIcon>
            <Refresh />
          </Button>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(styles)(Tooltips);
`;

class Tooltips extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Tooltips</h1>
        <p>
          We've restyled this component from Material-UI to give it a more
          attractive look, and to match the rest of the dashboard.
        </p>
        <p>Let's take a look at an example:</p>
        <h2>Example</h2>
        <Tooltip
          id="tooltip-top"
          title="Refresh"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button color="infoNoBackground" justIcon>
            <Refresh />
          </Button>
        </Tooltip>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For more details please refer to{" "}
          <a
            href="https://material-ui-next.com/demos/tooltips/"
            target="_blank"
          >
            material-ui
          </a>.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Tooltips);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Tooltips