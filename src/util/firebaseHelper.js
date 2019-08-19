import firebase from 'firebase'
import firebaseConfig from './firebase.config.json'
import AuthUtil from './auth'

window.firebase = firebase

const initApp = async () => {
    await firebase.initializeApp(firebaseConfig)
}

const signin =  (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

const getCurrentUserInfo = () => {
    let user = firebase.auth().currentUser

    if (user) {
        return ({
            uid: user.uid,
            name: user.displayName,
            email: user.meail
        })
    } else return null
}

const getCurrentUserToken = async () => {
    let user = firebase.auth().currentUser
    if (user) {
        const token = await user.getIdToken(true)
        return {token, uid: user.uid}
    } else return null
}

const tokenListenner =  (setToken, removeToken) => {
    firebase.auth().onAuthStateChanged( async user => {
        console.log("Auth state change")
        if (user) {
            const {token, uid} = await getCurrentUserToken()
            console.log('seting token in api', uid, token)
            setToken(uid, token)
            AuthUtil.signin(uid, token)
            
        }else {
         removeToken()
         AuthUtil.signout()
        }
    })
}

export default {initApp, signin, getCurrentUserInfo, getCurrentUserToken, tokenListenner} 