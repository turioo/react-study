import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {setAuthAccessToken} from "../../utils/services";
import {getMeService} from "../Me/Me";

export const SignInSlice = createSlice({
    name: 'SignIn',
    initialState: {
        value: {},
        flag:0
    },
    reducers: {
        setToken: (state, action) => {
          state.value =  action.payload
        },
        authDone: (state) => {
            state.flag = 1
        }
    },
})

export const SignInService = (email, password) =>  dispatch => {
    const data = {
        email:email,
        password:password
    }
    axios.post(`http://127.0.0.1:8000/api/v1/auth/login`, data)
        .then(res => {
            dispatch(setToken(res.data.data))
            setAuthAccessToken(res.data.data.access_token)
            dispatch(authDone())
            dispatch(getMeService())
        })

}
export const {setToken, authDone} = SignInSlice.actions
export const selectToken = state => state.SignIn.value;
export const authcompleted = state => state.SignIn.flag;
export default SignInSlice.reducer