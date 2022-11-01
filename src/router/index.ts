import { createRouter, createWebHistory } from "vue-router";
import Presentation from "../views/Presentation.vue";
import Infogames from "../views/Infogames.vue";
import Songify from "../views/Songify.vue";
import UON from "../views/Uon.vue";
import Journeys from "../views/Journeys.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
