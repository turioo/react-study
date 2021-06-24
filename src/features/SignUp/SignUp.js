import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import {SignUpFunc, SignUpService} from './SignUpSlice'
import './SignUp.scss'

export function SignUp() {
    const dispatch = useDispatch()
    const form = React.useRef()
    const name = React.useRef()
    const email = React.useRef()
    const password = React.useRef()
    const photo = React.useRef()

    const data = {
        name:name.current.value,
        email:email.current.value,
        password:password.current.value,
        photo:photo.current.value
    }
    const submit = e => {
        e.preventDefault()
        console.log(data)
        dispatch(SignUpService(data))
    }

    return (
        <div className="signup-wrapper">
            <form ref={form} onSubmit={submit}>
                <div className="title">Sign Up</div>
                <input ref={name} type="text" placeholder="Name"/>
                <input ref={email} type="text" placeholder="Email"/>
                <input ref={password} type="password" placeholder="Password"/>
                <label> PHOTO  <input ref={photo} className="file" name="photo" type="file" accept="image/jpeg, image/png" placeholder="Photo"/></label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}