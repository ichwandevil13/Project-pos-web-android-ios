import React from "react";
import { Grid } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";

import DocHeader from "./DocHeader/DocHeader";
import DocSidebar from "./DocSidebar/DocSidebar";

import docRoutes from "../../routes/documentation";

class Documentation extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          overflowX: "hidden"
        }}
      >
        <DocHeader />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={2}
            xl={2}
            style={{ marginTop: "75px", marginBottom: "75px" }}
          >
            <DocSidebar routes={docRoutes} {...this.props} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={5}
            style={{ marginTop: "75px", marginBottom: "75px" }}
          >
            <Switch>
              {docRoutes.map((prop, key) => {
                if (prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                return prop.routes.map((prop, key) => {
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                });
              })}
            </Switch>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={3}
            xl={2}
            style={{ marginTop: "75px" }}
          />
        </Grid>
      </div>
    );
  }
}

export default Documentation;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Documentation