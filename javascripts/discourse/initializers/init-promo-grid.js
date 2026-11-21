import { apiInitializer } from "discourse/lib/api";
import { scheduleOnce } from "@ember/runloop";

const GRID_ID = "liberty-promo-grid";

const PROMO_ROUTES = new Set([
  "discovery.latest",
  "discovery.categories",
  "discovery.index",
]);

function removeGrid() {
  document.getElementById(GRID_ID)?.remove();
}

function insertGrid() {
  if (document.getElementById(GRID_ID)) {
    return;
  }

  const mainOutlet = document.getElementById("main-outlet");

  if (!mainOutlet) {
    return;
  }

  const grid = document.createElement("div");
  grid.id = GRID_ID;
  grid.className = "homepage-promo-wrapper";
  grid.innerHTML = `
    <section class="promo-video-grid" aria-label="Ausgewählte Videos">
      <header class="promo-video-grid__header">
        <h2 class="promo-video-grid__title">Watch &amp; Learn</h2>
      </header>
      <div class="promo-video-grid__grid">

        <div class="promo-video-card">
          <div class="promo-video-card__media">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Video Title 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="promo-video-card__body">
            <h3 class="promo-video-card__title">Your First Video Title</h3>
            <p class="promo-video-card__description">
              A short description of this video goes here.
            </p>
          </div>
        </div>

        <div class="promo-video-card">
          <div class="promo-video-card__media">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="Video Title 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="promo-video-card__body">
            <h3 class="promo-video-card__title">Your Second Video Title</h3>
            <p class="promo-video-card__description">
              A short description of this video goes here.
            </p>
          </div>
        </div>

        <div class="promo-video-card">
          <div class="promo-video-card__media">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="Video Title 3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div class="promo-video-card__body">
            <h3 class="promo-video-card__title">Your Third Video Title</h3>
            <p class="promo-video-card__description">
              A short description of this video goes here.
            </p>
          </div>
        </div>

      </div>
    </section>
  `;

  mainOutlet.insertAdjacentElement("afterend", grid);
}

function handleRoute(routeName) {
  if (PROMO_ROUTES.has(routeName)) {
    scheduleOnce("afterRender", null, insertGrid);
  } else {
    scheduleOnce("afterRender", null, removeGrid);
  }
}

export default apiInitializer((api) => {
  // Fires on every route transition including back/forward
  api.onPageChange((_url, routeName) => {
    handleRoute(routeName);
  });

  // Fires on initial render — this is what was missing
  api.onAppEvent("page:changed", ({ currentRouteName }) => {
    handleRoute(currentRouteName);
  });
});
