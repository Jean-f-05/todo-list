import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./stores/index";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseLoader from "./components/UI/BaseLoader.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiTrash,
  RiEditBoxLine,
  IoCheckmarkCircleSharp,
} from "oh-vue-icons/icons";

addIcons(BiTrash, RiEditBoxLine, IoCheckmarkCircleSharp);

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-loader", BaseLoader);
app.component("v-icon", OhVueIcon);

app.mount("#app");
