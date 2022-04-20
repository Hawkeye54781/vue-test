import { createApp } from "vue";
import App from "./App.vue";
import TextHighlight from "vue-text-highlight";

createApp(App).component("text-highlight", TextHighlight);
createApp(App).mount("#app");
