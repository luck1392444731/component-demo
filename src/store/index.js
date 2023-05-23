import { createStore } from 'vuex'
import user from './modules/user.js'
console.log(user, 'user====')
export default createStore({
  modules: {
    user
  }
})
