import React from 'react'
import { useDispatch } from 'react-redux'
import {SignInFunction} from './SignInSlice'
import './SignIn.scss'
import { useHistory } from "react-router-dom";

export function SignIn() {
    const dispatch = useDispatch()
    const email = React.useRef()
    const password = React.useRef()
    const history = useHistory()

    const sendRequest = () => {
        const data = {
            email:email.current.value,
            password:password.current.value
        }
        dispatch(SignInFunction(data.email, data.password))
        history.push('/dashboard')
    }
    return (
        <div className="signin-wrapper">
            <form>
                <div className="title">Sign In</div>
                <input type="text" ref={email} placeholder="Email"/>
                <input type="password" ref={password} placeholder="Password"/>
                <button type="button"
                    onClick={() => sendRequest()}
                >Sign In</button>
            </form>
        </div>
    )
}