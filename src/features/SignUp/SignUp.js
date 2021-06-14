import React from 'react'
import { useDispatch } from 'react-redux'
import { SignUpFunc } from './SignUpSlice'
import './SignUp.scss'

export function SignUp() {
    const dispatch = useDispatch()
    return (
        <div className="signup-wrapper">
            <form>
                <div className="title">Sign Up</div>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(SignUpFunc())}
                >Sign Up</button>
            </form>
        </div>
    )
}