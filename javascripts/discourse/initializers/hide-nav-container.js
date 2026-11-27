import { apiInitializer } from "discourse/lib/api";

const HIDE_NAV_ROUTES = [
  "discovery.index",
  "discovery.categories",
   "discovery.latest",
];

export default apiInitializer((api) => {
  api.onPageChange(() => {
    const router = api.container.lookup("service:router");
    const routeName = router.currentRouteName ?? "";
    
    document.body.classList.toggle(
      "hide-navigation-container",
      HIDE_NAV_ROUTES.includes(routeName)
    );
  });
});
