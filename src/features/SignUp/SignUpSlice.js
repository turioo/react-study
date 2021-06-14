import { createSlice } from '@reduxjs/toolkit'

export const SignUpSlice = createSlice({
    name: 'SignUp',
    initialState: {
        value: [],
    },
    reducers: {
        SignUpFunc: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const { SignUpFunc } = SignUpSlice.actions

export default SignUpSlice.reducer