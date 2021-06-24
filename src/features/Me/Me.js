import {createSlice} from '@reduxjs/toolkit'
import {apiClient} from "../../utils/request";
import {setAuthAccessToken} from "../../utils/services";

export const Me = createSlice({
    name: 'Me',
    initialState: {
        value: {},
        status:0
    },
    reducers: {
        getMe: (state, action) => {
          state.value =  action.payload
        },
        setStatusAuth: (state) => {
            state.status = 1
        },
        setStatusUnAuth: (state) => {
            state.status = 0
        }
    },
})

export const getMeService = () =>  dispatch => {
    apiClient.get(`api/v1/auth/me?`)
        .then(res => {
            setAuthAccessToken(localStorage.getItem('access_token'))
            dispatch(getMe(res.data.data))
            dispatch(setStatusAuth())
        })

}
export const {getMe, setStatusAuth, setStatusUnAuth} = Me.actions
export const selectMe = state => state.Me.value;
export const selectMeStatus = state => state.Me.status;
export default Me.reducer