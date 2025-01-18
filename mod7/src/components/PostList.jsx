import React from "react";
import { Typography, Grid, Cards } from "@mui/material";

function PostList() {
    const postsData =
useData('https://jsonplaceholder.typicode.com/posts?_limit=5');
    
    const postList = postsData?.map(post => (
        <li key={post.id}><Link to={"/posts/" + post.id}>
            Post #{post.id}: {post.title}</Link></li>
    ));

    return (
        <ul>{postList}</ul>
    )
}