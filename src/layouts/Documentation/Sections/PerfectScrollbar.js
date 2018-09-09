import React from "react";
// import { withStyles } from 'material-ui';
// import { * } from '@material-ui/icons';
// import { * } from 'components';

function PerfectScrollbar({ ...props }) {
  // const { } = props;
  return (
    <div>
      <h1>Perfect Scrollbar v1.4.0</h1>
      <p>“Minimalistic but perfect custom scrollbar plugin.”</p>
      <p>
        !IMPORTANT Perfect Scrollbar is applied on the <code>mainPanel</code>{" "}
        wrapper div inside <code>src/layouts/Dashboard</code>,{" "}
        <code>SidebarWrapper</code> component inside{" "}
        <code>src/components/Sidebar/Sidebar</code> and <code>wrapper</code>{" "}
        div inside <code>src/layouts/Pages</code> so we will have a nice
        scrollbar that is visible only when you actually scroll. Since it is
        changing the overflows of the CSS it is also affecting the child
        elements which have a scroll so please make sure that you add the class{" "}
        <code>.ps-child</code> to any element that should have scroll.
      </p>
      <p>
        For more information please check out the{" "}
        <a
          href="https://www.npmjs.com/package/perfect-scrollbar"
          target="_blank"
          rel="noopener noreferrer"
        >
          full documentation
        </a>.
      </p>
      <h2>Styles</h2>
      <p>
        You will find the styles for this component in<br />{" "}
        <code>
          src/assets/scss/material-dashboard-pro-react/plugins/_plugin-perfect-scrollbar.scss
        </code>.
      </p>
    </div>
  );
}

export default PerfectScrollbar;



// WEBPACK FOOTER //
// ./src/layouts/Documentation/Sections/PerfectScrollbar