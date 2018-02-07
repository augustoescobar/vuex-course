import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import counter from './modules/counter';
import paragraph from './modules/paragraph';

export const store = new Vuex.Store({
  modules: {
    counter,
    paragraph
  }
});
