import md5 from 'md5'
import { login } from '@/api/sys.js'
export default {
    namespaced: true,
    state: () => ({}),
    mutations: {},
    actions: {
        login (context, userInfo) {
            const { username, password } = userInfo
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                }).then(data => {
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}
