import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer  from "../../../../components/Grid/GridContainer";
import GridItem  from "../../../../components/Grid/GridItem";

import Card  from "../../../../components/Card/Card";
import CardHeader  from "../../../../components/Card/CardHeader";
import CardBody  from "../../../../components/Card/CardBody";

import { straightLinesChart, simpleBarChart } from "../../../../variables/charts";

import chartsStyle from "../../../../assets/jss/material-dashboard-pro-react/views/chartsStyle";

class CardChart extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={straightLinesChart.data}
                type="Line"
                options={straightLinesChart.options}
                listener={straightLinesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Straight Lines Chart</h4>
              <p className={classes.cardCategory}>Line Chart with Points</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={simpleBarChart.data}
                type="Bar"
                options={simpleBarChart.options}
                responsiveOptions={simpleBarChart.responsiveOptions}
                listener={simpleBarChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Simple Bar Chart</h4>
              <p className={classes.cardCategory}>Bar Chart</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(chartsStyle)(CardChart);



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Cards/CardChart