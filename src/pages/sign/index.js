import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import InputText from '../../components/InputText'
import styled from 'styled-components'
import firebaseHelper from '../../util/firebaseHelper'
import AuthUtil from '../../util/auth'

const Sign = (props) => {

    const [userCredentials, setuserCredentials] = useState({
        email: null,
        password: null,
    })

    const [isAuth, setisAuth] = useState(AuthUtil.isAuth())


    const changeHandler = (event) => {
        setuserCredentials({
            ...userCredentials,
            [event.target.name]: event.target.value
        })
    }

    const submit = (event) => {
        event.preventDefault()
        console.log('submit')
        const {email, password} = userCredentials
        return firebaseHelper.signin(email, password)
        .then( user => {
            console.log(user)
            firebaseHelper.getCurrentUserToken()
            .then(data => {
               setisAuth(true)
            })
        }).catch(err => {
            alert('Erro ao tentar logar, tente novamente')
        })
    }

    return(
        <>
        {
        isAuth 
        ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        : 
        <>
        <h1>Login</h1>
        <form>
            <InputText type='email'  name='email' placeholder='Email' onChange={changeHandler} />
            <InputText type='password' name='password'  placeholder='password' onChange={changeHandler} />
            <button onClick={submit} > Logar </button>
        </form>
        </>
     }
     </>
    )
}

export default Sign