import { apiInitializer } from "discourse/lib/api";
import LibertyPromoGrid from "../components/liberty-promo-grid";

export default apiInitializer((api) => {
  api.renderInOutlet("above-footer", LibertyPromoGrid);
});
