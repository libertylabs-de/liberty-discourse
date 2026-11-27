import { apiInitializer } from "discourse/lib/api";

const GRID_ID = "liberty-promo-grid";

const PROMO_ROUTES = new Set([
  "discovery.latest",
  "discovery.categories",
  "discovery.index",
]);

const CARDS = [
  {
    videoId: "VIDEO_ID_1",
    title: "Your First Video Title",
    description: "A short description of this video goes here.",
  },
  {
    videoId: "VIDEO_ID_2",
    title: "Your Second Video Title",
    description: "A short description of this video goes here.",
  },
  {
    videoId: "VIDEO_ID_3",
    title: "Your Third Video Title",
    description: "A short description of this video goes here.",
  },
];

function buildCard({ videoId, title, description }) {
  const card = document.createElement("div");
  card.className = "promo-video-card";

  const media = document.createElement("div");
  media.className = "promo-video-card__media";

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.title = title;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");

  media.appendChild(iframe);

  const body = document.createElement("div");
  body.className = "promo-video-card__body";

  const h3 = document.createElement("h3");
  h3.className = "promo-video-card__title";
  h3.textContent = title;

  const p = document.createElement("p");
  p.className = "promo-video-card__description";
  p.textContent = description;

  body.appendChild(h3);
  body.appendChild(p);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

function buildGrid() {
  const wrapper = document.createElement("div");
  wrapper.id = GRID_ID;
  wrapper.className = "homepage-promo-wrapper";

  const section = document.createElement("section");
  section.className = "promo-video-grid";
  section.setAttribute("aria-label", "Ausgewählte Videos");

  const header = document.createElement("header");
  header.className = "promo-video-grid__header";

  const h2 = document.createElement("h2");
  h2.className = "promo-video-grid__title";
  h2.textContent = "Watch & Learn";

  header.appendChild(h2);

  const grid = document.createElement("div");
  grid.className = "promo-video-grid__grid";

  for (const card of CARDS) {
    grid.appendChild(buildCard(card));
  }

  section.appendChild(header);
  section.appendChild(grid);
  wrapper.appendChild(section);

  return wrapper;
}

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
  mainOutlet.insertAdjacentElement("afterend", buildGrid());
}

export default apiInitializer((api) => {
  console.log("[promo-grid] initializer running");

  api.onPageChange((_url, routeName) => {
    console.log("[promo-grid] onPageChange:", routeName);

    if (PROMO_ROUTES.has(routeName)) {
      insertGrid();
    } else {
      removeGrid();
    }
  });
});
