import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";


const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, 'posts'));
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);



    return (
        <PostContext.Provider
            value={{
                title,
                setTitle,
                desc,
                setDesc,
                posts,
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

export const PostAuth = () => {
    return useContext(PostContext)
}