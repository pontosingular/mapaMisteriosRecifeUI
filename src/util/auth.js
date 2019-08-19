const signin = (uid, token) => {
    localStorage.clear()
    localStorage.setItem('uid', uid)
    localStorage.setItem('token', token)
}

const signout = () => {
    localStorage.clear()
}

const getCurrentData = () => {
    return({'uid': localStorage.getItem('uid'), 'token': localStorage.getItem('token')})
}

const isAuth = () => {
    const uid = localStorage.getItem('uid')
    const token = localStorage.getItem('token')

    return (uid !== null && token !== null)
}

export default {signin, signout, isAuth, getCurrentData}