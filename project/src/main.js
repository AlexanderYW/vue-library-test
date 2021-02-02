import { createApp } from 'vue'
import App from './App.vue'
import Library from 'vue-library'

const app = createApp(App)
app.use(Library)
app.mount('#app')
