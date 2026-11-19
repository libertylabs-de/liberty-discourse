import { apiInitializer } from "discourse/lib/api";
import LibertyBreadcrumbHome from "../components/liberty-breadcrumb-home";

export default apiInitializer((api) => {
  api.renderInOutlet(
    "before-bread-crumbs",
    LibertyBreadcrumbHome
  );
});
