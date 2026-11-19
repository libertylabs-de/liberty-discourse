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
        <a href="/" aria-label="Home" class="liberty-breadcrumb-home-link">
          {{icon "home"}}
        </a>
        {{icon "angle-right"}}
      </span>
    {{/if}}
  </template>
}
