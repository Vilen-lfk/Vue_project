export default {
  state: {
    ads: [
      {
        title: "First",
        desc: "First Desc",
        promo: true,
        src: "https://i.pinimg.com/736x/83/7d/3e/837d3e2e09c9bfdcecfe9b3d5a14ec7c.jpg",
        id: "1",
        userId: "1"
      },
      {
        title: "Second",
        desc: "Second Desc",
        promo: true,
        src: "https://cdn-0.totalmotorcycle.com/wp-content/uploads/2023/07/2024-Ducati-Panigale-V2a-1200x800.jpg",
        id: "2",
        userId: "2"
      },
      {
        title: "Third",
        desc: "Thitd Desc",
        promo: true,
        src: "https://i.pinimg.com/originals/c4/b9/46/c4b946640b0ad8ac134291cf748970f4.jpg",
        id: "3",
        userId: "3"
      },
      {
        title: "Fouth",
        desc: "Fouth Desc",
        promo: true,
        src: "https://i.pinimg.com/736x/52/0f/31/520f31c039b768b839b2a72cd8d33160.jpg",
        id: "4",
        userId: "4"
      }
    ]
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    },
    loadAds(state, payload) {
      state.ads = payload
    },
    updateAd(state, { title, desc, id }) {
      const ad = state.ads.find(a => a.id === id)
      if (ad) {
        ad.title = title
        ad.desc = desc
      }
    }
  },
  actions: {
    createAd({ commit }, payload) {
      payload.id = Math.random()
      commit('createAd', payload)
    },
    async updateAd({ commit }, { title, desc, id }) {
      commit('clearError')
      commit('setLoading', true)

      // Заглушка запроса
      const isRequestOk = true
      const promise = new Promise(resolve => resolve('Done'))

      if (isRequestOk) {
        await promise.then(() => {
          commit('updateAd', { title, desc, id })
          commit('setLoading', false)
        })
      } else {
        await promise.then(() => {
          commit('setLoading', false)
          commit('setError', 'Ошибка редактирования объявления')
          throw 'Упс... Ошибка редактирования объявления'
        })
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo)
    },
    myAds(state, getters) {
      return state.ads.filter(ad => ad.userId == getters.user.id)
    },
    adById(state) {
      return id => state.ads.find(ad => ad.id == id)
    }
  }
}
