import { createApp } from 'vue'
import App from './App.vue'
import router from './route'

// vue2的方式
// const app = new Vue()
// app.$mount('#app')

// vue3的方式
createApp(App).use(router).mount('#app')