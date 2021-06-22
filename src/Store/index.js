import { configureStore } from '@reduxjs/toolkit'
import SignInReducer from '../features/SignIn/SignInSlice'
import SignUpReducer from '../features/SignUp/SignUpSlice'
import PostsReducer from '../features/Posts/PostsSlice'

export default configureStore({
    reducer: {
        SignIn : SignInReducer,
        SignUp : SignUpReducer,
        Posts : PostsReducer
    },
})