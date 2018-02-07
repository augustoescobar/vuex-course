const state = {
  paragraph: "hello"
};

const getters = {
  paragraph: state => {
    return state.paragraph;
  }
};

const mutations = {
  updateParagraph: (state, payload) => {
    state.paragraph = payload;
  }
};

const actions = {
  updateParagraph: ({ commit }, payload) => {
    commit('updateParagraph', payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
