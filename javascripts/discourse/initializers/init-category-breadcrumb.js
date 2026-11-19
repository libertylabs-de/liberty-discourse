import { apiInitializer } from "discourse/lib/api";
import LibertyBreadcrumbHome from "../components/liberty-breadcrumb-home";

export default apiInitializer("1.14.0", (api) => {
  api.renderInOutlet("before-bread-crumbs", LibertyBreadcrumbHome);
});
