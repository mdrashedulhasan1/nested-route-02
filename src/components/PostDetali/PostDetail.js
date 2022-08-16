import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const Post = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </div>
    );
};

export default Post;