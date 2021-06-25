import React, {useEffect} from 'react';
import './Dashboard.scss'
import Post from "./Post/Post";
import {useDispatch, useSelector} from 'react-redux'
import {addPostService, getPostsService} from "../../features/Posts/PostsSlice";
import {selectPosts} from "../../features/Posts/PostsSlice";
import {setAuthAccessToken} from "../../utils/services";

const Dashboard = () => {
    const selector = useSelector(selectPosts)
    const dispatch = useDispatch()
    useEffect(() => {
            setAuthAccessToken(localStorage.getItem('access_token'))
            dispatch(getPostsService())

    },
        []
    )
    let list = selector.map((el) => <Post key={el.id}
        id = {el.id}
        name={el.name}
        photo={el.user.photo}
        title={el.title}
        text={el.text}
        create={el.created_at}
        user_id={el.user.id}
        change_id={el.last_change_user}
        update={el.updated_at}
    />)

    let title = React.useRef()
    let text = React.useRef()
    return (
       <div className="dashboard-wrapper">
           <div className="dashboard-wrapper__background">
               <div id='dots'></div>
               <div id='dots2'></div>
               <div id='dots3'></div>
           </div>
           <div className="dashboard-container">
               <div className="left">
                   {list}
               </div>
               <div className="right">
                   <div className="title">Add post:</div>
                   <input type="text" placeholder="Title" ref={title}/>
                   <textarea placeholder="Text" ref={text}/>
                   <button onClick={ ()=> dispatch(addPostService(title.current.value, text.current.value))}>Add</button>
               </div>
           </div>
       </div>
    );
}


export default Dashboard;
