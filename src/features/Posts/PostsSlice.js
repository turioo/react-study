import { createSlice } from '@reduxjs/toolkit'
import {apiClient} from "../../utils/request";

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
            state.value.push(action.payload)
        },
        removePost: (state,action) => {
          state.value = state.value.filter( function (e) {
              return e.id !== action.payload
          })
        },
        editPost:(state, action) => {
           for (let el in state.value) {
               if (state.value[el].id === action.payload.id) {
                   state.value[el].text = action.payload.text
               }
           }
        }
    },
})
export const getPostsService = () => dispatch => {
    apiClient.get('/api/v1/posts').then(res => {
            dispatch(getPosts(res.data.data))
        })
}
export const addPostService = (title, text) => dispatch =>{
    let data = {
        title:title,
        text:text
    }
    apiClient.post('/api/v1/posts', data).then(res => {
        dispatch(addPost(res.data.data))
    })
}
export const removePostService = (id) => dispatch =>{
    apiClient.delete(`/api/v1/posts/${id}`).then(res => {
        dispatch(removePost(id))
    })
}
export const editPostService = (data, id) => dispatch =>{
    let newData = {
        title:data.title,
        text:data.text
    }
    let newState = {
        id:id,
        title:data.title,
        text:data.text
    }
    apiClient.put(`/api/v1/posts/${data.id}`, newData).then(res => {
        dispatch(editPost(newState))
    })
}

export const { getPosts, removePost, addPost, editPost } = PostsSlice.actions
export const selectPosts = state => state.Posts.value;
export default PostsSlice.reducer