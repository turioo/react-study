import {createSlice} from '@reduxjs/toolkit'
import {setAuthAccessToken} from "../../utils/services";
import {getMeService} from "../Me/Me";
import {apiClient} from "../../utils/request";

export const SignUpSlice = createSlice({
    name: 'SignUp',
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


export const {setToken, authDone} = SignUpSlice.actions
export default SignUpSlice.reducer