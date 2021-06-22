import React, {useEffect, useState} from 'react';
import './Post.scss'
import {ReactComponent as Cancel} from '../../../assets/img/close.svg'
import {useDispatch} from 'react-redux'
import {getPostsService, removePostService} from "../../../features/Posts/PostsSlice";

const Post = (props) => {
    const dispatch = useDispatch()
    useEffect(() =>
            dispatch(getPostsService()),
        []
    )
    const [changed, isChanged] = useState(props.change_id)
    const styles = {
        changed : {
            color: "red"
        },
        nochange : {
            color: "blue"
        }

    }
    return (
            <div className="post-container">
                <div className="post__white-block">
                    <div className="top">
                        <div className="left">
                            <div className="photo"><img src={props.photo} /></div>
                            <div className="name">{props.name}</div>
                        </div>
                        <div className="right-side">
                            <div className="delete" onClick={() => dispatch(removePostService(props.id))}>
                               <Cancel />
                            </div>
                        </div>
                    </div>
                    <div className="bot">
                        <div className="text">{props.text}</div>
                        <div className="date-line">
                            <div className="date">{props.create}</div>
                            <div className="date-edit" style={styles.changed}>
                                Edited:
                                <div className="new-date">{props.update}</div>
                                <div className="edit-by">Andrii Bilyk</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default Post;
