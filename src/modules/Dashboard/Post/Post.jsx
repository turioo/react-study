import React, {useEffect, useState} from 'react';
import './Post.scss'
import {ReactComponent as Cancel} from '../../../assets/img/close.svg'
import {ReactComponent as Edit} from '../../../assets/img/pen.svg'
import {useDispatch} from 'react-redux'
import {editPostService, getPostsService, removePostService} from "../../../features/Posts/PostsSlice";

const Post = (props) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    useEffect(() =>
            dispatch(getPostsService()),
        []
    )
    const styles = {
        changed: {
            display:'flex'
        },
        nochanged:{
            display:'none'
        },
        show:{
            display:'block'
        }
    }
    let text = React.useRef();
    const sendData = () => {
        let data = {
            id: props.id,
            title:props.name,
            text: text.current.value
        }
        dispatch(editPostService(data, props.id))
        setEdit(false)
    }
    return (
            <div className="post-container">
                <div className="post__white-block">
                    <div className="top">
                        <div className="left-side">
                            <div className="photo"><img src={props.photo} /></div>
                            <div className="name">{props.name}</div>
                        </div>
                        <div className="right-side">
                            <div className="change" onClick={()=>setEdit(!edit)}>
                                <Edit />
                            </div>
                            <div className="delete" onClick={() => dispatch(removePostService(props.id))}>
                               <Cancel />
                            </div>
                        </div>
                    </div>
                    <div className="bot">
                        <div className="text">{props.text}</div>
                        <div className="change-area" style={ edit ?  styles.show : styles.nochanged }>
                            <textarea ref={text} defaultValue={props.text} />
                            <div className="button-change" onClick={() => sendData() }>Save</div>
                        </div>
                        <div className="date-line">
                            <div className="date">{props.create}</div>
                            <div className="date-edit" style={props.change_id ==='nochange' ? styles.nochanged : styles.changed }>
                                Edited:
                                <div className="new-date">{props.update}</div>
                                <div className="edit-by">{props.change_id.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default Post;
