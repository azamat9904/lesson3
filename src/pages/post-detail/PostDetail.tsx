import React, {useEffect, useState} from 'react';
import {IPost} from "../../types/interfaces";
import {postsApi} from "../../api/postsApi";
import s from './PostDetail.module.scss';
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";
import {useHistory} from 'react-router-dom';

const PostDetail = ({id}:{id:number})=>{

    const [post,setPost] = useState<IPost|null>(null);
    const history = useHistory();

    useEffect(()=>{
        postsApi.getPost(id)
            .then(data=>setPost(data))
            .catch(error=>console.log(error));
    },[id]);

    const goBack = ()=>{
        history.push('/posts');
    };

    if(!post) return <Loading />;

    return(
        <div className={s.postContainer}>
            <div className={s.post}>
                <h4 className={s.postTitle}>{post.title}</h4>
                <p className={s.postContent}>{post.body}</p>
                <Button className={s.postButton} text={'Go back'} type = "button" callBack={goBack}/>
            </div>
        </div>
    )
};
export default PostDetail;
