// javascripts/discourse/components/liberty-breadcrumb-home.gjs

import Component from "@glimmer/component";
import { service } from "@ember/service";
import icon from "discourse/helpers/d-icon";

export default class LibertyBreadcrumbHome extends Component {
  @service router;

  get isCategoryPage() {
    const path = (this.router.currentURL ?? "").split("?")[0];
    return path === "/c" || path.startsWith("/c/");
  }

  <template>
    {{#if this.isCategoryPage}}
      <span class="liberty-breadcrumb-home">
        <a href="/" aria-label="Home">
          {{icon "feather-home"}}
        </a>
        {{icon "feather-chevron-right"}}
      </span>
    {{/if}}
  </template>
}
