import Pages from "../layouts/Pages";
import RTL from "../layouts/RTL";
import Dashboard from "../layouts/Dashboard";
import Documentation from "../layouts/Documentation/Documentation";

var indexRoutes = [
  { path: "/rtl", component: RTL },
  { path: "/pages", component: Pages },
  { path: "/documentation", component: Documentation },
  { path: "/", component: Dashboard }
];

export default indexRoutes;



// WEBPACK FOOTER //
// ./src/routes/index