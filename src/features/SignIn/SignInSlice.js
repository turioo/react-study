import { createSlice } from '@reduxjs/toolkit'

export const signInSlice = createSlice({
    name: 'song',
    initialState: {
        value: [],
    },
    reducers: {
        addSong: (state, action) => {
            state.value.push(action.payload)
        },
        removeSong: (state, action) => {
            state.value.pop()
        },
    },
})

// Action creators are generated for each case reducer function
export const { addSong, removeSong } = signInSlice.actions

export default signInSlice.reducer