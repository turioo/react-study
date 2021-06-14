import { configureStore } from '@reduxjs/toolkit'
import SignInReducer from '../features/SignIn/SignInSlice'
import SignUpReducer from '../features/SignUp/SignUpSlice'

export default configureStore({
    reducer: {
        SignIn : SignInReducer,
        SignUp : SignUpReducer,
    },
})