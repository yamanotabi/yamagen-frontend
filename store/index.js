export const state = () => ({
  user: null,
  word: null,
  auth: false
})

export const mutations = {
  login(state, payload) {
    state.auth = true
    state.user = payload
  },
  logout(state) {
    state.auth = false
    state.user = null
  },
  setWord(state, payload) {
    state.word = payload
  }
}

export const actions = {
  nuxtServerInit({ dispatch }, { req }) {
    return dispatch('getSession')
  },
  async getSession({ commit }) {
    const session = await this.$axios.get('/server/session')
    if (session.data.user != null) {
      commit('login', session.data.user)
    }
  }
}