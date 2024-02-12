import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import mixins from "./mixins";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);
app.mixin(mixins);

app.mount("#app");
