import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

// @material-ui/lab
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import { Person, Save, Print, Share, Delete, FileCopy, FindInPage, Edit, Close, Check, Filter2Outlined, ExpandMore } from "@material-ui/icons";
import CustomInput from "../../components//CustomInput/CustomInput";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import NavigationIcon from '@material-ui/icons/Navigation';

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavPills from "../../components/NavPills/NavPills";
import Table from "../../components/Table/Table";
import Accordion from "../../components/Accordion/Accordion";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardIcon from "../../components/Card/CardIcon";
import CardHeader from "../../components/Card/CardHeader";

import MasterSatuansStyle from "../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

import product1 from "../../assets/img/product1.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.jpg";

const actions = [
  { icon: <FileCopy />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
  { icon: <Delete />, name: 'Delete' },
];


class MasterSatuans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      datatables: [],
      useFilter: false,
      dialopen: false,
      dialhidden: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.getMoviesFromApiAsync().then((response) => {
      this.setState({
        datatables: response,
      });
    })
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1
    });
  };

  
  handleVisibility = () => {
    this.setState(state => ({
      dialopen: false,
      dialhidden: !state.dialhidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      dialopen: !state.dialopen,
    }));
  };

  handleOpen = () => {
    if (!this.state.dialhidden) {
      this.setState({
        dialopen: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      dialopen: false,
    });
  };


  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.movies.forEach(obj => { obj.Actions = this.simpleButtons; });
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  toggleFilter(value) {
    this.setState({
      useFilter: !this.state.useFilter
    });
  }
  render() {
    const { classes } = this.props;
    const { dialhidden, dialopen } = this.state;
    let isTouch;
    if (typeof document !== 'undefined') {
      isTouch = 'ontouchstart' in document.documentElement;
    }
    const fillButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button color={prop.color} className={classes.actionButton} key={key}>
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const roundButtons = [
      { color: "info", icon: Person },
      { color: "success", icon: Edit },
      { color: "danger", icon: Close }
    ].map((prop, key) => {
      return (
        <Button
          round
          color={prop.color}
          className={classes.actionButton + " " + classes.actionButtonRound}
          key={key}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const datatables = [];

    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Simple Table</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHead={[
                  "#",
                  "Title",
                  "Release Years",
                  "Actions"
                ]}
                tableData={this.state.datatables}
                customCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.center,
                  classes.right,
                  classes.right
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />
            </CardBody>
          </Card>
          <Button color="info" round>
            <ExpandMore /> Load More
          </Button>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            hidden={dialhidden}
            icon={<SpeedDialIcon />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={isTouch ? undefined : this.handleOpen}
            onMouseEnter={isTouch ? undefined : this.handleOpen}
            onMouseLeave={this.handleClose}
            open={dialopen}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={this.handleClick}
              />
            ))}
          </SpeedDial>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(MasterSatuansStyle)(MasterSatuans);



// WEBPACK FOOTER //
// ./src/views/Tables/MasterSatuans