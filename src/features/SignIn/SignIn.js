import React from 'react'
import { useDispatch } from 'react-redux'
import { SignInService} from './SignInSlice'
import './SignIn.scss'

export function SignIn() {
    const dispatch = useDispatch()
    const email = React.useRef()
    const password = React.useRef()

    const sendRequest = () => {
        const data = {
            email:email.current.value,
            password:password.current.value
        }
        dispatch(SignInService(data.email, data.password))
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