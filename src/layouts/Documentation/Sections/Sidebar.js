import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import { Link } from "react-router-dom";

const codeImport = `import Sidebar from "../../../components/Sidebar/Sidebar";
import dashboardRoutes from "routes/dashboard";
// background image for the sidebar
import image from "../../../assets/img/sidebar-2.jpg";
import logo from "../../../assets/img/logo-white.svg";`;
const codeExampleFunction = `constructor(props){
  super(props);
  this.state = {
    // variable for deciding if the sidebar is open (true) or not (false) on a mobile device
    mobileOpen: false,
    // variables for deciding if the sidebar is mini (true) or full width (false)
    miniActive: false
  };
}
// function for changeing the component from open to not open and vice versa on a mobile device
handleDrawerToggle = () => {
  this.setState({ mobileOpen: !this.state.mobileOpen });
};
// function for changeing the component from mini to full width and vice versa
sidebarMinimize() {
  this.setState({ miniActive: !this.state.miniActive });
}`;
const codeExample = `// you should pass the {...rest} props so it can access this.props.location.pathname
<Sidebar
  routes={dashboardRoutes}
  logoText={"Creative Tim"}
  logo={logo}
  image={image}
  handleDrawerToggle={this.handleDrawerToggle}
  open={this.state.mobileOpen}
  color="white"
  bgColor="blue"
  miniActive={this.state.miniActive}
  {...rest}
/>`;
const codeProps = `Sidebar.defaultProps = {
  bgColor: "blue"
};

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf(["white", "red", "orange", "green", "blue", "purple"]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object)
};`;

function Sidebar({ ...props }) {
  //  const { } = props;
  return (
    <div>
      <h1>Sidebar</h1>
      <p>
        This is the main navigation of the <code>Dashboard</code> layout. It's
        position is on left, and if you're on RTL it is on the right side of the
        window.
      </p>
      <p>
        To change our demo user, you need to change lines <code>134-221</code>.
      </p>
      <p>
        If you want to add new collapses to this component, just add in it's
        state (lines <code>60-68</code>) the name of your collapse, and then add
        this name to your collapse route as well (see{" "}
        <Link to="/documentation/routing-system">routing system</Link>).
      </p>
      <p>
        Between lines <code>31-55</code> there is a custom made component in
        which we render the links, links from the header (top navigation of our
        demo) and the user collapse. We've done this so that we can initialize
        and use <code>PerfectScrollbar</code> for Windows users.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/jss/material-dashboard-pro-react/components/sidebarStyle
        </code>.
      </p>
      <h2>Usage</h2>
      <p>First of all you need some imports:</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeImport}
      </SyntaxHighlighter>
      <p>Then in your component you need the following functions:</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExampleFunction}
      </SyntaxHighlighter>
      <p>And in your render method:</p>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeProps}
      </SyntaxHighlighter>
    </div>
  );
}

export default Sidebar;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/Sidebar