import { configureStore } from '@reduxjs/toolkit'
import SignInReducer from '../features/SignIn/SignInSlice'
import PostsReducer from '../features/Posts/PostsSlice'
import MeReducer from '../features/Me/Me'

export default configureStore({
    reducer: {
        SignIn : SignInReducer,
        Posts : PostsReducer,
        Me: MeReducer
    },
})