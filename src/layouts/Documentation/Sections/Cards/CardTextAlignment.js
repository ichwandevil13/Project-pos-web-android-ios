import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button  from "../../../../components/CustomButtons/Button";
import Card  from "../../../../components/Card/Card";
import CardBody  from "../../../../components/Card/CardBody";

import { cardTitle } from "../../../../assets/jss/material-dashboard-pro-react";

const styles = {
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

class CardsImages extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card className={classes.textCenter} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card className={classes.textRight} style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>Special title treatment</h4>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardsImages);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Cards/CardTextAlignment