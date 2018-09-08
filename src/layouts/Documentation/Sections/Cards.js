import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
// core components
import Accordion from "../../../components/Accordion/Accordion";

// section of this page
import CardBasic from "./Cards/CardBasic";
import CardBodyExample from "./Cards/CardBodyExample";
import CardTitlesTextLinks from "./Cards/CardTitlesTextLinks";
import CardsImages from "./Cards/CardsImages";
import CardChart from "./Cards/CardChart";
import CardHeaderTypes from "./Cards/CardHeaderTypes";
import CardsWithAnimation from "./Cards/CardsWithAnimation";
import CardTextAlignment from "./Cards/CardTextAlignment";

// examples
const codeCardBasic = `import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

import cardImagesStyles from "../../../assets/jss/material-dashboard-pro-react/cardImagesStyles";

class CardBasic extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{ width: "20rem" }}>
        <img
          className={classes.cardImgTop}
          data-src="holder.js/100px180/"
          alt="100%x180"
          style={{ height: "180px", width: "100%", display: "block" }}
          src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          data-holder-rendered="true"
        />
        <CardBody>
          <h4>Card title</h4>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button color="primary">Go somewhere</Button>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(cardImagesStyles)(CardBasic);
`;

const codeCardBodyExample = `import React from "react";
// core components
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

class CardBodyExample extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>This is some text within a card body.</CardBody>
      </Card>
    );
  }
}

export default CardBodyExample;
`;

const codeCardTitlesTextLinks = `import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import Muted from "../../../components/Typography/Muted";

import {
  cardTitle,
  cardSubtitle,
  cardLink
} from "../../../assets/jss/material-dashboard-pro-react";

const styles = {
  cardTitle,
  cardSubtitle,
  cardLink
};

class CardTitlesTextLinks extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>Card title</h4>
          <Muted>
            <h6 className={classes.cardSubtitle}>Card subtitle</h6>
          </Muted>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#pablo"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Card link
          </a>
          <a
            href="#pablo"
            className={classes.cardLink}
            onClick={e => e.preventDefault()}
          >
            Another link
          </a>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(CardTitlesTextLinks);
`;

const codeCardsImages = `import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

import cardImagesStyles from "../../../assets/jss/material-dashboard-pro-react/cardImagesStyles";

const styles = {
  ...cardImagesStyles,
  textWhite: {
    "&, & *": {
      color: "#FFF"
    }
  }
};

class CardsImages extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card style={{ width: "20rem" }}>
          <img
            className={classes.cardImgTop}
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: "180px", width: "100%", display: "block" }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
          <CardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button color="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <br />
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </CardBody>
          <img
            className={classes.cardImgBottom}
            data-src="holder.js/100px180/"
            alt="100%x180"
            style={{ height: "180px", width: "100%", display: "block" }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df23d717%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df23d717%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
        </Card>
        <br />
        <Card className={classes.textWhite}>
          <div className={classes.cardImgOverlay}>
            <h4>Card title</h4>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>Last updated 3 mins ago</p>
          </div>
          <img
            className={classes.cardImg}
            data-src="holder.js/100px270/#55595c:#373a3c/text:Card image"
            alt="100%x270"
            style={{ height: "270px", width: "100%", display: "block" }}
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22843%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20843%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163df50ef51%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A42pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163df50ef51%22%3E%3Crect%20width%3D%22843%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22314.0703125%22%20y%3D%22154.35%22%3E843x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
          />
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CardsImages);
`;

const codeCardHeaderTypes = `import React from "react";
// material-ui
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Language from "@material-ui/icons/Language";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardHeader from "../../../components/Card/CardHeader";
import CardIcon from "../../../components/Card/CardIcon";
import CardText from "../../../components/Card/CardText";

import dashboardStyle from "../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import loginPageStyle from "../../../assets/jss/material-dashboard-pro-react/views/loginPageStyle";

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
`;

const codeCardChart = `import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

import { straightLinesChart, simpleBarChart } from "../../../variables/charts";

import chartsStyle from "../../../assets/jss/material-dashboard-pro-react/views/chartsStyle";

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
`;

const codeCardsWithAnimation = `import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import { completedTasksChart } from "../../../variables/charts";

import dashboardStyle from "../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class CardsWithAnimation extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart className={classes.cardHover}>
              <CardHeader color="rose" className={classes.cardHeaderHover}>
                <ChartistGraph
                  className="ct-chart-white-colors"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <div className={classes.cardHoverUnder}>
                  <Tooltip
                    id="tooltip-top"
                    title="Refresh"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button simple color="info" justIcon>
                      <Refresh className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top"
                    title="Change Date"
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="transparent" simple justIcon>
                      <Edit className={classes.underChartIcons} />
                    </Button>
                  </Tooltip>
                </div>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

CardsWithAnimation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(CardsWithAnimation);
`;

const codeCardTextAlignment = `import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

import { cardTitle } from "../../../assets/jss/material-dashboard-pro-react";

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
`;

// props
const codeProps = `Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  product: PropTypes.bool,
  chart: PropTypes.bool,
  login: PropTypes.bool
};

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  plain: PropTypes.bool,
  testimonial: PropTypes.bool,
  testimonialFooter: PropTypes.bool
};

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signup: PropTypes.bool,
  color: PropTypes.bool,
  profile: PropTypes.bool,
  calendar: PropTypes.bool
};

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  product: PropTypes.bool
};

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signup: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.bool
};

CardIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};

CardText.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ])
};`;

function Cards({ ...props }) {
  return (
    <div>
      <h1>Cards</h1>
      <p>
        Our cards provide a flexible and extensible content container with
        multiple variants and options.
      </p>
      <p>
        We think cards are one of the best ways to organise your information. We
        went all out with possibilities and we recommended finding the right fit
        for your product. The general component for a card is called{" "}
        <code>Card</code>. The information inside the card usually goes inside
        the content (component <code>CardBody</code>). You can change the color
        of the <code>CardHeader</code> component using the{" "}
        <code>color="*"</code> attribute like this:<br />
        <code>
          color="primary" | "info" | "success" | "warning" | "danger" | "rose"
        </code>.
      </p>
      <p>
        If you want to use the cards on white background you can remove it’s
        shadow using the property <code>plain</code> on the card components (see
        Props bellow).
      </p>
      <h2>Styles</h2>
      <p>The styles for these components can be found in</p>
      <br />
      <ul>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardAvatarStyle
          <ul>
            <li>
              <code>src/components/Card/CardAvatar</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardBodyStyle
          <ul>
            <li>
              <code>src/components/Card/CardBody</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardFooterStyle
          <ul>
            <li>
              <code>src/components/Card/CardFooter</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardHeaderStyle
          <ul>
            <li>
              <code>src/components/Card/CardHeader</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardIconStyle
          <ul>
            <li>
              <code>src/components/Card/CardIcon</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardStyle
          <ul>
            <li>
              <code>src/components/Card/Card</code>
            </li>
          </ul>
        </li>
        <li>
          src/assets/jss/material-dashboard-pro-react/components/cardTextStyle
          <ul>
            <li>
              <code>src/components/Card/CardText</code>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Examples</h2>
      <p>
        Below is an example of a basic card with mixed content and a fixed
        width. Cards have no fixed width to start, so they’ll naturally fill the
        full width of its parent element.
      </p>
      <CardBasic />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardBasic}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h2>Content Types</h2>
      <h3>CardBody</h3>
      <p>
        The building block of a <code>Card</code> is the <code>CardBody</code>.
        Use it whenever you need a padded section within a card.
      </p>
      <CardBodyExample />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardBodyExample}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>Titles, text, and links</h3>
      <p>
        Card titles are used by adding <code>classes.cardTitle</code> to a{" "}
        <code>{`<h*>`}</code> tag. In the same way, links are added and placed
        next to each other by adding <code>classes.cardLink</code> to an{" "}
        <code>{`<a>`}</code> tag.
      </p>
      <p>
        Subtitles are used by adding a <code>classes.cardSubtitle</code> to a{" "}
        <code>{`<h*>`}</code> tag. If the <code>classes.cardTitle</code> and the{" "}
        <code>classes.cardSubtitle</code> items are placed in a{" "}
        <code>CardBody</code> item, the card title and subtitle are aligned
        nicely.
      </p>
      <CardTitlesTextLinks />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardTitlesTextLinks}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>Images</h3>
      <p>
        <code>classes.cardImgTop</code> places an image to the top of the card.
      </p>
      <p>
        <code>classes.cardImgBototm</code> places an image to the top of the
        card.
      </p>
      <CardsImages />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardsImages}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>CardHeader types</h3>
      <CardHeaderTypes />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardHeaderTypes}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>Cards with Charts in them</h3>
      <CardChart />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardChart}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h3>Cards with Animation</h3>
      <p>
        We’ve created some special cards that can have actions under the header,
        you can activate those cards by adding some special classes on the{" "}
        <code>Card</code> and <code>CardHeader</code> components, special
        classes that you need to import from{" "}
        <b>src/assets/jss/material-dashboard-pro-react/hoverCardStyle</b>
      </p>
      <CardsWithAnimation />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardsWithAnimation}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h2>Text alignment</h2>
      <p>
        You can quickly change the text alignment of any card—in its entirety or
        specific parts—with our text align classes.
      </p>
      <CardTextAlignment />
      <Accordion
        collapses={[
          {
            title: "View Example Code",
            content: (
              <SyntaxHighlighter language="jsx" style={prism}>
                {codeCardTextAlignment}
              </SyntaxHighlighter>
            )
          }
        ]}
      />
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Cards;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Cards