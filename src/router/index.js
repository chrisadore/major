import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import list from "@/components/pages/list";
import guidelines from "@/components/pages/guidelines";
import events from "@/components/pages/events";
import visits from "@/components/pages/visits";
import apply from "@/components/pages/apply";
import partner_universities from "@/components/pages/partner_universities";
import application from "@/components/pages/application";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      component: list
    },
    {
      path: "/guidelines",
      name: "guidelines",
      component: guidelines
    },
    {
      path: "/events",
      name: "events",
      component: events
    },
    {
      path: "/visits",
      name: "visits",
      component: visits
    },
    {
      path: "/apply",
      name: "apply",
      component: apply
    },
    {
      path: "/application",
      name: "application",
      component: application
    },
    {
      path: "/partner_universities",
      name: "partner_universities",
      component: partner_universities
    }
  ],

  mode: "history"
});
