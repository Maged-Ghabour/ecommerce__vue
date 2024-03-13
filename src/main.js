import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

// Pinia
import { createPinia } from "pinia";

//Emitter Config

import mitt from "mitt";
const Emitter = mitt();

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .provide("Emitter", Emitter)
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount("#app");
