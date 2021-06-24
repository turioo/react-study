import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import {setAuthAccessToken} from "../../utils/services";
import {getMeService} from "../Me/Me";
import {apiClient} from "../../utils/request";

export const SignUpSlice = createSlice({
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

export const SignUpService = (data) =>  dispatch => {

    apiClient.post(`api/v1/auth/register?`, data)
        .then(res => {
            console.log(res)
            // dispatch(setToken(res.data.data))
            // setAuthAccessToken(res.data.data.access_token)
            // dispatch(authDone())
            // dispatch(getMeService())
        })

}
export const {setToken, authDone} = SignUpSlice.actions
export default SignUpSlice.reducer