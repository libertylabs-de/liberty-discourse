import { apiInitializer } from "discourse/lib/api";
import LibertyBreadcrumbHome from "../components/liberty-breadcrumb-home";

export default apiInitializer((api) => {
  api.renderInOutlet(
    "category-breadcrumbs",
    LibertyBreadcrumbHome
  );
});
