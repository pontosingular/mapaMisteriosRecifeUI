import axios from 'axios'
import firebaseHelper from '../util/firebaseHelper'
import AuthHelper from '../util/auth'

window.firebase = firebaseHelper

const api = axios.create({
    baseURL: `https://mapa-misterios-recife-api.herokuapp.com`
})

const setToken = (uid, token) => {

    api.defaults.headers.Authorization = `Bearer ${token}`
    api.defaults.headers['x-user-id'] = uid
}

const removeToken = () => {
    delete api.defaults.headers.Authorization
    delete api.defaults.headers['x-user-id']
}


const startServices = async () => {
    await firebaseHelper.initApp()
    if (AuthHelper.isAuth()) {
        const {uid, token} = AuthHelper.getCurrentData()
        setToken(uid, token)
    }
    firebaseHelper.tokenListenner(setToken,removeToken)
}

startServices()

export default api