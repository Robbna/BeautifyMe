import "./assets/style.css";
import App from "./App.vue";
import Notifications from 'notiwind'
import { createApp } from "vue";
import { router } from "./router";

const app = createApp(App);

// Highlight JS
import hljs from 'highlight.js/lib/core';
import java from 'highlight.js/lib/languages/java';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/base16/dracula.css';

hljs.registerLanguage('java', java);


app.use(router);
app.use(hljsVuePlugin)
app.use(Notifications)

app.mount("#app");