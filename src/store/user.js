class User {
  constructor(id, email, password) {
    this.id = id
    this.email = email
    this.password = password
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload)
      state.user = payload
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      try {
        commit('clearError')
        commit('setLoading', true)

        // Заменить на свой HTTP-запрос к бэкенду
        const fakeId = Date.now()
        const user = new User(fakeId, email, password)
        commit('setUser', user)

        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}
