import React from "react";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

function BlogPost(){
    const mypost = {
        title : "Learn React ", 
        body : "By Aditya Chauhan , he is a great teacher "
    }
    return (
        <>
        <PostHeader title = {mypost.title}/>
        <PostBody body={mypost.body}/>
        </>
    )
}
export default BlogPost