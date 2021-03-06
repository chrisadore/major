import Vue from "vue";
import Vuex from "vuex";
import Application from "./application";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Application
  }
});
