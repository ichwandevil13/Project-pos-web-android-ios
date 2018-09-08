import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import {
    HashRouter,
    Route,
    Switch
} from "react-router-dom";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import indexRoutes from "./routes/index";

const hist = createBrowserHistory();

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactGA.initialize("UA-46172202-1");
ReactGA.set({
    page: window.location.pathname + window.location.search
});
ReactGA.pageview(window.location.pathname + window.location.search);


hist.listen(location => {
  ReactGA.set({
      page: window.location.pathname + window.location.search
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactPixel.pageView();
  ReactPixel.fbq("track", "PageView");
});

const styles = {
  root: {
    flexGrow: 1,
  },
};
 
function MainPart(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HashRouter>
        <Switch> {
            indexRoutes.map((prop, key) => {
                return <Route path = {
                    prop.path
                }
                component = {
                    prop.component
                }
                key = {
                    key
                }
                />;
            })
        }
        </Switch> 
      </HashRouter>
    </div>
  );
}
MainPart.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(MainPart);