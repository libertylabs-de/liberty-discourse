import { apiInitializer } from "discourse/lib/api";
import LibertyBreadcrumbHome from "../components/liberty-breadcrumb-home";

export default apiInitializer((api) => {
  api.renderInOutlet(
    "before-bread-crumbs",
    LibertyBreadcrumbHome
  );
  // initialize-category-boxes.js — add inside apiInitializer
  api.decorateWidget("bread-crumbs:before", (helper) => {
    return helper.h("li.liberty-breadcrumb-home", [
      helper.h(
        "a",
        { attributes: { href: "/", "aria-label": "Home" } },
        [helper.iconNode("home")]
      ),
      helper.iconNode("angle-right"),
      ]);
    });
  });
