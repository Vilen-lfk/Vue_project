class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload);
      state.user = payload;
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError');
      commit('setLoading', true);
      
      try {
        // Имитация запроса на сервер
        const isRequestOk = await new Promise(resolve => {
          setTimeout(() => {
            // Здесь должна быть реальная логика проверки
            // Например, ответ от сервера
            resolve(true); // или false в случае ошибки
          }, 3000);
        });

        if (isRequestOk) {
          commit('setUser', new User(1, email, password));
        } else {
          commit('setError', 'Ошибка регистрации');
          throw new Error('Упс... Ошибка регистрации');
        }
      } catch (error) {
        commit('setError', error.message);
        throw error;
      } finally {
        commit('setLoading', false);
      }
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};