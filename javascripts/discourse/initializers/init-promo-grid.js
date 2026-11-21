import { apiInitializer } from "discourse/lib/api";

const GRID_ID = "liberty-promo-grid";

function removeGrid() {
  document.getElementById(GRID_ID)?.remove();
}

function insertGrid() {
  if (document.getElementById(GRID_ID)) {
    return;
  }

  const mainOutlet = document.getElementById("main-outlet");

  if (!mainOutlet) {
    console.warn("[promo-grid] #main-outlet not found");
    return;
  }

  console.log("[promo-grid] inserting grid");

  const grid = document.createElement("div");
  grid.id = GRID_ID;
  grid.className = "homepage-promo-wrapper";
  grid.style.cssText = "background:red;height:100px;width:100%;display:block;";

  mainOutlet.insertAdjacentElement("afterend", grid);
}

export default apiInitializer((api) => {
  console.log("[promo-grid] initializer running");

  api.onPageChange((url, routeName) => {
    // Log both url and routeName to see what we actually get
    console.log("[promo-grid] url:", url);
    console.log("[promo-grid] routeName:", routeName);
    console.log("[promo-grid] router currentRouteName:",
      Discourse.__container__
        .lookup("service:router")
        ?.currentRouteName
    );

    // Insert on ALL routes for now to test
    insertGrid();
  });
});
