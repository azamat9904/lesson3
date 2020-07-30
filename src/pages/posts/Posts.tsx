import React, {useEffect, useState} from 'react';
import {IPost} from "../../types/interfaces";
import {postsApi} from "../../api/postsApi";
import s from './Posts.module.scss';
import {NavLink} from "react-router-dom";

const Posts:React.FunctionComponent = () => {

    const [posts, setPosts] = useState<IPost[] | null>(null);

    useEffect(() => {
        postsApi.getPosts()
            .then((data) => setPosts(data))
            .catch((error) => console.log('Error happened:' + error));
    }, []);

    const postsTemplate = posts?.map(post =>
        <div className={s.postItem} key = {post.id}>
            <h4 className={s.postTitle}><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></h4>
            <p className={s.postContent}>{post.body}</p>
        </div>);

    return (
        <div className={s.postItemContainer}>
            {
                postsTemplate === null ? 'Posts are empty now' : postsTemplate
            }
        </div>
    )
};
export default Posts;
