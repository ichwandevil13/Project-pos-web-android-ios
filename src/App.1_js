import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "./routes/index";

const hist = createBrowserHistory();

const styles = {
  root: {
    flexGrow: 1,
  },
};

function MainPart(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    </div>
  );
}
MainPart.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MainPart);