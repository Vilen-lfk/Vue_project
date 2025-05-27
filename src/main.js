import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'  // Импорт Vuex store

loadFonts()

createApp(App)
  .use(router)
  .use(store)      // <-- подключение хранилища
  .use(vuetify)
  .mount('#app')
