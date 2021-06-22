import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const PostsSlice = createSlice({
    name: 'Posts',
    initialState: {
        value: [],
    },
    reducers: {
        getPosts: (state, action ) => {
         state.value = action.payload
        },
        addPost:(state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        },
        removePost: (state,action) => {
          state.value = state.value.filter( function (e) {
              return e.id !== action.payload
          })
        }
    },
})
export const getPostsService = () => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/v1/posts`, {
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
        .then(res => {
            dispatch(getPosts(res.data.data))
        })
}
export const addPostService = (title, text) => dispatch =>{
    let data = {
        title:title,
        text:text
    }
    axios.post(`http://127.0.0.1:8000/api/v1/posts`, data,{
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
        .then((res) => {
            dispatch(addPost(res.data.data))
        })
}
export const removePostService = (id) => dispatch =>{
    axios.delete(`http://127.0.0.1:8000/api/v1/posts/${id}`, {
        headers : {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    })
        .then(() => {
           dispatch(removePost(id))
        })
}

export const { getPosts, removePost, addPost } = PostsSlice.actions
export const selectPosts = state => state.Posts.value;
export default PostsSlice.reducer