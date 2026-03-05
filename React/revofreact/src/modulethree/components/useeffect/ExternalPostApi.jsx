    import React, { useEffect, useState } from "react";

function ApiPost() {
    const [post , setPost] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect (() => {
        // define async operation 

         const fetchPost = async() => {
 try {
     setLoading(true)
     setError(null) 
     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
     if(!response.ok){
    throw new Error (`"HTTP Error " : status : ${response.status}`)    
    }
    const data  = await response.json();
    setPost(data);
} catch (error) {
    setError("Failed to fetch data , please try again later")
    console.log("fetch post error " , error) 
}
finally{
    setLoading(false)
}
}
fetchPost();
    } , [])


    return ( 
        <>
        <h1>Blog Post</h1>
        {loading && <h2>Loading to fetch ....</h2>}
        {error && <h2> {error} </h2>}
        {!loading && !error &&  (
            <ul>
                {post.map(posts => 
                <li key={posts.id}>
console.log()
 <h2>{posts.title}</h2>
 <p>{posts.body.substring(0,100)}...</p>
                </li>)}
            </ul>
        )

        }
        </>
    )
}
export default ApiPost