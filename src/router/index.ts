import { createRouter, createWebHashHistory } from "vue-router";
import Presentation from "../views/Presentation.vue";
import Infogames from "../views/Infogames.vue";
import Songify from "../views/Songify.vue";
import UON from "../views/Uon.vue";
import Journeys from "../views/Journeys.vue";

const router = createRouter({
  history: createWebHashHistory(),
  // https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode
  // https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages
  routes: [
    {
      path: "/",
      name: "home",
      component: Presentation,
    },
    {
      path: "/infogames",
      name: "infogames",
      component: Infogames,
    },
    {
      path: "/songify",
      name: "songify",
      component: Songify,
    },
    {
      path: "/uon-vs-code",
      name: "uon-vs-code",
      component: UON,
    },
    {
      path: "/journeys",
      name: "journeys",
      component: Journeys,
    },
  ],
});

export default router;
