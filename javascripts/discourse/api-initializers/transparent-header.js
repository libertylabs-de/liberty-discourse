import { apiInitializer } from "discourse/lib/api";

const SCROLL_THRESHOLD = 10; // px scrolled before the header fills
const CLASS_NAME = "header-scrolled";

export default apiInitializer((api) => {
  let ticking = false;

  const update = () => {
    ticking = false;
    document.documentElement.classList.toggle(
      CLASS_NAME,
      window.scrollY > SCROLL_THRESHOLD
    );
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // initial state + re-evaluate after every route change
  // (scroll position is restored/reset on navigation)
  update();
  api.onPageChange(() => requestAnimationFrame(update));
});
