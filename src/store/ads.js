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
        src:  "https://i.pinimg.com/736x/52/0f/31/520f31c039b768b839b2a72cd8d33160.jpg",
        id: "4",
        userId: "4"
      },
    ],
  },
mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
	actions: {
		createAd({commit, getters},payload){
			payload.id = Math.random()
      payload.userld = getters.user != null ? getters.user.id: '1'
			commit('createAd', payload)
		}
	},
  async createAd({commit, getters},payload){
payload.id = Math.random()
payload.userId = getters.user != null ? getters.user.id : '1'
commit('clearError')
commit('setLoading', true)
//Заглушка запроса
let isRequestOk = true
let promise = new Promise(function(resolve) {
setTimeout(() => resolve('Done')
, 3000);
});
if (isRequestOk) {
await promise.then(()=> {
commit('createAd', payload)
commit('setLoading', false)
})
} else {
await promise.then(()=> {
commit('setLoading', false)
commit('setError', 'Ошибка создания объявления')
throw 'Упс... Ошибка создания объявления'
})
}
},

	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
		},
		adById(state) {
			return id => {
				return state.ads.find(ad => ad.id == id)
			}
		}

	}
}

