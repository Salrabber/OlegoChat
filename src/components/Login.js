import React, { useEffect } from 'react'
import '../styles/chat.scss'

export default function Login({login}){

    function handleLogin(response){
        console.log(response.credential)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: 'http://703950243766-ed1mfnibe4el5csrcgsnacomv4ggoorb.apps.googleusercontent.com',
            callback: handleLogin
        })

        google.accounts.id.renderButton(
            document.getElementById('loginBtn'),
            {theme: 'outline', size: 'large'}
        )

    },[])

    return (
        <div id='cont' className='container'>
            <div onClick={() => login()} className='googleLog' id='loginBtn'></div>
        </div>
    )
}