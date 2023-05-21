import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'
import '@/styles/index.scss'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app
  .use(router)
  .mount('#app')
