import { apiInitializer } from "discourse/lib/api";
import LatestDiscussionsHeading from "../components/latest-discussions-heading";

export default apiInitializer((api) => {
  api.renderInOutlet("before-topic-list", LatestDiscussionsHeading);
});
