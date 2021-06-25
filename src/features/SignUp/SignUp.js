import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import './SignUp.scss'
import {SignUpService} from "../SignIn/SignInSlice";

export function SignUp() {
    const dispatch = useDispatch()
    const form = React.useRef()
    const name = React.useRef()
    const email = React.useRef()
    const password = React.useRef()
    const passwordconf = React.useRef()
    const photo = React.useRef()
    const data = new FormData();
    var file
    const onChange = (e) => {
        file = e.target.files[0]
    }
    const submit = e => {
        e.preventDefault()
        data.append('name', name.current.value)
        data.append('email', email.current.value)
        data.append('password', password.current.value)
        data.append('password_confirmation', passwordconf.current.value)
        data.append('photo', file)
        dispatch(SignUpService(data))
    }

    return (
        <div className="signup-wrapper">
            <form ref={form} onSubmit={submit} method="POST" >
                <div className="title">Sign Up</div>
                <input ref={name} type="text" placeholder="Name"/>
                <input ref={email} type="text" placeholder="Email"/>
                <input ref={password} type="password" placeholder="Password"/>
                <input ref={passwordconf} type="password" placeholder="Password confirmation"/>
                <label> PHOTO  <input ref={photo} onChange={onChange} className="file" name="photo" type="file" accept="image/jpeg, image/png" placeholder="Photo"/></label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}