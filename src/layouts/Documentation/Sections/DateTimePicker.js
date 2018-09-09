import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
import Today from "@material-ui/icons/Today";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardIcon from "../../../components/Card/CardIcon";
import CardBody from "../../../components/Card/CardBody";

import extendedFormsStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedFormsStyle";

const codeExample = `import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
import Today from "@material-ui/icons/Today";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardIcon from "../../../components/Card/CardIcon";
import CardBody from "../../../components/Card/CardBody";

import extendedFormsStyle from "../../../assets/jss/material-dashboard-pro-react/views/extendedFormsStyle";

class DateTimePicker extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Today />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Datetime Picker</h4>
            </CardHeader>
            <CardBody>
              <InputLabel className={classes.label}>
                Datetime Picker
              </InputLabel>
              <br />
              <FormControl fullWidth>
                <Datetime
                  inputProps={{ placeholder: "Datetime Picker Here" }}
                />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <LibraryBooks />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Date Picker</h4>
            </CardHeader>
            <CardBody>
              <InputLabel className={classes.label}>Date Picker</InputLabel>
              <br />
              <FormControl fullWidth>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "Date Picker Here" }}
                />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <AvTimer />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Time Picker</h4>
            </CardHeader>
            <CardBody>
              <InputLabel className={classes.label}>Time Picker</InputLabel>
              <br />
              <FormControl fullWidth>
                <Datetime
                  dateFormat={false}
                  inputProps={{ placeholder: "Time Picker Here" }}
                />
              </FormControl>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(extendedFormsStyle)(DateTimePicker);
`;

class DateTimePicker extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>React Datetime v2.14.0</h1>
        <p>
          We've used{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime
          </a>{" "}
          for this component and we've restyled it to match our theme.
        </p>
        <p>
          Please refer to{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime documentation
          </a>{" "}
          for more information.
        </p>
        <h2>Styles</h2>
        <p>
          You will find the styles for this component in<br />{" "}
          <code>
            src/assets/scss/material-dashboard-pro-react/plugins/_plugin-react-datetime.scss
          </code>.
        </p>
        <h2>Example</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Datetime Picker</h4>
              </CardHeader>
              <CardBody>
                <InputLabel className={classes.label}>
                  Datetime Picker
                </InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    inputProps={{ placeholder: "Datetime Picker Here" }}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <LibraryBooks />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Date Picker</h4>
              </CardHeader>
              <CardBody>
                <InputLabel className={classes.label}>Date Picker</InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Date Picker Here" }}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <AvTimer />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Time Picker</h4>
              </CardHeader>
              <CardBody>
                <InputLabel className={classes.label}>Time Picker</InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    dateFormat={false}
                    inputProps={{ placeholder: "Time Picker Here" }}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(DateTimePicker);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/DateTimePicker