import './App.css'
import {getAllPosts, Post as TPost} from "./service/post-service.tsx";
import React, {useEffect, useRef, useState} from "react";
import {Post} from "./post/Post.tsx";

function App() {

    const myRef = useRef(false);
    const [posts, setPosts] = useState<TPost[]>([]);

    useEffect(() => {
        console.log("Mount");
        getAllPosts().then(p => {
            myRef.current = true;
            setPosts(p);
        }).catch(err => console.log(err));
        return () => {
            console.log("Unmount");
        }
    }, []);

    return (
        <>
            <h1 className="text-center p-2 m-0 border-bottom">
                React with AJAX
            </h1>
            {!myRef.current && <h2>Loading...!</h2>}
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}

        </>
    )
}

export default App
