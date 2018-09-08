import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class RoutingSystem extends React.Component {
  render() {
    return (
      <div>
        <h1>Routing System</h1>
        <p>
          For a better and easier way we've decided to create dynamic routes.
          You will find all our demo routes in:
        </p>
        <ul>
          <li>
            <code>src/routes/index</code>{" "}
            <i>
              (these are the routes for all of our app through the layouts of
              the project)
            </i>
          </li>
          <li>
            <code>src/routes/dashboard</code>{" "}
            <i>
              (these are the routes for all of the Dashboard views -{" "}
              <code>src/views</code>)
            </i>
          </li>
          <li>
            <code>src/routes/pages</code>{" "}
            <i>
              (these are the routes for the Pages views -{" "}
              <code>src/views/pages</code>)
            </i>
          </li>
          <li>
            <code>src/routes/rtl</code>{" "}
            <i>
              (this is the route for RTLSupport view -{" "}
              <code>src/views/pages/RTLSupport</code>)
            </i>
          </li>
        </ul>
        <p>Let's take a look at each one of them.</p>
        <h2>
          <code>src/routes/index</code>
        </h2>
        <p>
          As said above, this are the route for all our app, it contains three
          routes. We've used this thinking you may need to have multiple layouts
          for your app.
        </p>
        <p>
          This routes are beeing rendered in <code>src/index.js</code>.
        </p>
        <p>
          You will see that we've used <code>react-router-dom</code>'s
          components to create this routes, using <code>Router</code>,{" "}
          <code>Route</code> and <code>Switch</code> as expected, just that
          we've used a dynamic approach.
        </p>
        <p>
          You can add as many routes you would like in{" "}
          <code>src/routes/index</code> to create as many layouts as you
          wish and they will all be rendered as <code>react-router-dom</code>'s
          components.
        </p>
        <p>
          In our demo app we have three layouts, each layout having it's own set
          of routes.
        </p>
        <p>
          You will find all our demo layouts in <code>src/layouts</code> (<code>
            Dashboard
          </code>, <code>Pages</code>, <code>RTL</code>).
        </p>
        <h3>Legend</h3>
        <ul>
          <li>
            <SyntaxHighlighter language="jsx" style={prism}>
              {`{ path: "path/for/component", component: Component },`}
            </SyntaxHighlighter>
            <ul>
              <li>
                <code>path</code> (path for your route - this will be seen in
                the browser url input)
              </li>
              <li>
                <code>component</code> (this is the layout to be rendered)
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          <code>src/routes/dashboard</code> and{" "}
          <code>src/routes/rtl</code>
        </h2>
        <p>
          These are the routes for the all pages/views that appear in the
          Dashboard layout (these pages can be found in <code>src/views/*</code>).
        </p>
        <p>
          You will see these routes beeing used/rendered in{" "}
          <code>src/layouts/Dashboard</code> (see lines 24-38 in this
          component).
        </p>
        <p>
          You will see that we've used <code>react-router-dom</code>'s
          components to create these routes, using <code>Route</code>,{" "}
          <code>Switch</code> and <code>Redirect</code> as expected, just that
          we've used a dynamic approach.
        </p>
        <p>
          These routes have also been used to create the links that appear in
          the <code>src/components/Sidebar/Sidebar</code> (see lines
          222-368) and the navbar brand in{" "}
          <code>src/components/Header/Header</code> (see lines 25-42).
        </p>
        <p>
          The difference between <code>src/routes/dashboard</code> and{" "}
          <code>src/routes/rtl</code> is that one has english names, and one
          has arabic names.
        </p>
        <h3>Legend</h3>
        <ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{ redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>redirect</code> (Used to tell our demo app components this
              is a redirect. It will be ignored in the{" "}
              <code>src/components/Sidebar/Sidebar</code>, see line 225. In
              the <code>src/layouts/Dashboard</code> it will be rendered as
              a <code>Redirect</code> component, see line 28.)
            </li>
            <li>
              <code>path</code> (which pathname to be redirected)
            </li>
            <li>
              <code>pathTo</code> (where to be redirected)
            </li>
            <li>
              <code>name</code> (name of the route - used to display the name as
              a navbar brand in <code>src/components/Header/Header</code>)
            </li>
          </ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{ path: "/path/of/view", name: "NameOfView", icon: SVGIcon, component: Component },`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>path</code> (path for your route - this will be seen in the
              browser url input)
            </li>
            <li>
              <code>name</code> (name of your route - this will appear in the{" "}
              <code>src/components/Sidebar/Sidebar</code> component as a
              link and as a navbar brand in{" "}
              <code>src/components/Header/Header</code>)
            </li>
            <li>
              <code>icon</code> (icon to be displayed alongside with links in{" "}
              <code>src/components/Sidebar/Sidebar</code> component)
            </li>
            <li>
              <code>component</code> (this is the page to be rendered at the
              specified path)
            </li>
          </ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{collapse: true, path: "/path/of/collapse", name: "NameOfCollapse", state: "stateNameFromSidebar", icon: SVGIcon, views: [arrayOfRoutes] },`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>path</code> (path for your collapse group - this will be
              seen in the browser url input)
            </li>
            <li>
              <code>name</code> (name of your route - this will appear in the{" "}
              <code>src/components/Sidebar/Sidebar</code> component as a
              link)
            </li>
            <li>
              <code>state</code> (name of the state from{" "}
              <code>src/components/Sidebar/Sidebar</code> component used to
              know if the collapse is open or not)
            </li>
            <li>
              <code>icon</code> (icon to be displayed alongside with collapse
              links in <code>src/components/Sidebar/Sidebar</code>{" "}
              component)
            </li>
            <li>
              <code>views</code> (this is an array made of the routes/sub-links
              of the collapse)
              <h5>Legend of views</h5>
              <SyntaxHighlighter language="jsx" style={prism}>
                {`{ path: "/path/of/view", name: "NameOfView", mini: "MiniName", component: Component },`}
              </SyntaxHighlighter>
              <ul>
                <li>
                  <code>path</code> (path for your route - this will be seen in
                  the browser url input)
                </li>
                <li>
                  <code>name</code> (name of your route - this will appear in
                  the <code>src/components/Sidebar/Sidebar</code> component
                  as a link and as a navbar brand in{" "}
                  <code>src/components/Header/Header</code>)
                </li>
                <li>
                  <code>mini</code> (mini name to be displayed alongside with
                  links in <code>src/components/Sidebar/Sidebar</code>{" "}
                  component)
                </li>
                <li>
                  <code>component</code> (this is the page to be rendered at the
                  specified path)
                </li>
              </ul>
            </li>
          </ul>
        </ul>
        <h2>
          <code>src/routes/pages</code>
        </h2>
        <p>
          These routes are used for all the pages/views that appear in the{" "}
          <code>Pages</code> layout (these pages can be found in{" "}
          <code>src/views/pages/*</code>).
        </p>
        <p>
          You will see these routes beeing used/rendered in{" "}
          <code>src/layouts/Pages</code> (see lines 44-62 in this
          component).
        </p>
        <p>
          You will see that we've used <code>react-router-dom</code>'s
          components to create these routes, using <code>Route</code>,{" "}
          <code>Switch</code> and <code>Redirect</code> as expected, just that
          we've used a dynamic approach.
        </p>
        <p>
          These routes have also been used to create the links that appear in
          the <code>src/components/Sidebar/Sidebar</code> (<code>
            Pages collapse
          </code>, see lines 39-58 and line 73 inside{" "}
          <code>src/routes/dashboard</code>) and to create the links that
          appear in <code>src/components/Header/PagesHeader</code> (see
          lines 60-83).
        </p>
        <h3>Legend</h3>
        <ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{redirect: true, path: "/pages", pathTo: "/pages/register-page", name: "Register Page"}`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>redirect</code> (Used to tell our demo app components this
              is a redirect. It will be ignored in the{" "}
              <code>src/components/Sidebar/Sidebar</code>, see line 295. In
              the <code>src/layouts/Pages</code> it will be rendered as a{" "}
              <code>Redirect</code> component, see line 51.)
            </li>
            <li>
              <code>path</code> (which pathname to be redirected)
            </li>
            <li>
              <code>pathTo</code> (where to be redirected)
            </li>
            <li>
              <code>name</code> (name of the route - used to display the name as
              a navbar brand in <code>src/components/Header/Header</code>)
            </li>
          </ul>
          <li />
          <SyntaxHighlighter language="jsx" style={prism}>
            {`{path: "path/for/components", name: "DisplayedInSidebar", short: "ForPagesHeader", mini: "MiniName", icon: SVGIcon, component: Component },`}
          </SyntaxHighlighter>
          <ul>
            <li>
              <code>path</code> (path for your route - this will be seen in the
              browser url input)
            </li>
            <li>
              <code>name</code> (name of your route - this will appear in the{" "}
              <code>src/components/Sidebar/Sidebar</code> component as a
              link and as a navbar brand in{" "}
              <code>src/components/Header/Header</code>)
            </li>
            <li>
              <code>short</code> (name to be displayed as links in{" "}
              <code>src/components/Header/PagesHeader</code> component)
            </li>
            <li>
              <code>mini</code> (mini name to be displayed alongside with links
              in <code>src/components/Sidebar/Sidebar</code> component)
            </li>
            <li>
              <code>icon</code> (icon to be displayed alongside with collapse
              links in <code>src/components/Header/PagesHeader</code>{" "}
              component)
            </li>
            <li>
              <code>component</code> (this is the page to be rendered at the
              specified path)
            </li>
          </ul>
        </ul>
        <h2>
          <code>Notice</code>
        </h2>
        <p>
          Because our routes are arrays of objects, and each route is an object,
          you can add what props you want in our routes and do what you want
          with them.
        </p>
        <p>
          For example, if you want to "hide" a route (you want it to not be
          displayed in sidebar), you could add a prop like{" "}
          <code>invisible: true</code> and then in sidebar add an if statement
          inside the <code>map</code> function of ours and do like this:
          <SyntaxHighlighter language="jsx" style={prism}>
            {`if(prop.invisible) return null;`}
          </SyntaxHighlighter>
        </p>
      </div>
    );
  }
}

export default RoutingSystem;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/RoutingSystem