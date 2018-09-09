import React from "react";
// material-ui
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Language from "@material-ui/icons/Language";
// core components
import GridContainer  from "../../../../components/Grid/GridContainer";
import GridItem  from "../../../../components/Grid/GridItem";
import Card  from "../../../../components/Card/Card";
import CardBody  from "../../../../components/Card/CardBody";
import CardHeader  from "../../../../components/Card/CardHeader";
import CardIcon  from "../../../../components/Card/CardIcon";
import CardText  from "../../../../components/Card/CardText";

import dashboardStyle from "../../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import loginPageStyle from "../../../../assets/jss/material-dashboard-pro-react/views/loginPageStyle";

var styles = {
  ...dashboardStyle,
  ...loginPageStyle,
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function CardHeaderTypes({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>Regular header</h4>
              <p>Category subtitle</p>
            </CardHeader>
            <CardBody>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitle}>Full header coloured</h4>
              <p>Category subtitle</p>
            </CardHeader>
            <CardBody>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Language />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Here is the Icon</h4>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary" text>
              <CardText color="primary">
                <h4 className={classes.cardTitle}>Here is the Text</h4>
                <p className="card-category">Category subtitle</p>
              </CardText>
            </CardHeader>
            <CardBody>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(CardHeaderTypes);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Cards/CardHeaderTypes