import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {$apiClient} from "../../utils/request";

export const SignInSlice = createSlice({
    name: 'SignIn',
    initialState: {
        value: {},
    },
    reducers: {
        setToken: (state, action) => {
          state.value =  action.payload
          localStorage.setItem('access_token', action.payload.access_token);
        },
    },
})

export const SignInFunction = (email, password) =>  dispatch => {
    axios.post(`http://127.0.0.1:8000/api/v1/auth/login`, {
        email:email,
        password:password
    }, $apiClient)
        .then(res => {
            dispatch(setToken(res.data.data))
        })

}

export const {setToken} = SignInSlice.actions
export const selectToken = state => state.SignIn.value;
export default SignInSlice.reducer