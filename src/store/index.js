import { createStore } from 'vuex'
import ads from './ads'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'  // Импортируем уже существующий store

loadFonts()

createApp(App)
  .use(router)
  .use(store)  // Используем уже импортированный store
  .use(vuetify)
  .mount('#app')

  const store = createStore({
    modules:{
    ads
    }
    })    


export default store

