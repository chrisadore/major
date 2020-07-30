import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import guidelines from "@/components/pages/guidelines";
import events from "@/components/pages/events";
import visits from "@/components/pages/visits";
import apply from "@/components/pages/apply";
import partner_universities from "@/components/pages/partner_universities";
import application from "@/components/pages/application";
import team from "@/components/pages/team";
import about from "@/components/pages/about";
import undergraduate_studies from "@/components/pages/undergraduate_studies";
import postgraduate_studies from "@/components/pages/postgraduate_studies";
import phd from "@/components/pages/phd";
import life_at_muj from "@/components/pages/life_at_muj";
import rajasthan from "@/components/pages/rajasthan";

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
    },
    {
      path: "/team",
      name: "team",
      component: team
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/undergraduate_studies",
      name: "undergraduate_studies",
      component: undergraduate_studies
    },
    {
      path: "/postgraduate_studies",
      name: "postgraduate_studies",
      component: postgraduate_studies
    },
    {
      path: "/phd",
      name: "phd",
      component: phd
    },
    {
      path: "/rajasthan",
      name: "rajasthan",
      component: rajasthan
    },
    {
      path: "/life_at_muj",
      name: "life_at_muj",
      component: life_at_muj
    },
  ],

  mode: "history"
});
