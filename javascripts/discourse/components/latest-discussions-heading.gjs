import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class LatestDiscussionsHeading extends Component {
  @service router;

  get shouldDisplay() {
    const routeName = this.router.currentRouteName ?? "";
    return routeName === "discovery.index" || routeName === "discovery.latest";
  }

  get headingText() {
    return settings.latest_discussions_heading || "Letzte Diskussionen";
  }

  <template>
    {{#if this.shouldDisplay}}
      <h3 class="latest-discussions-heading">{{this.headingText}}</h3>
    {{/if}}
  </template>
}
