"use strict";

const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter;
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += parseInt(payload);
  },
  decrement: (state, payload) => {
    state.counter -= parseInt(payload);
  }
};

const actions = {
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.step);
    }, payload.delay);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('decrement', payload.step);
    }, payload.delay);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
