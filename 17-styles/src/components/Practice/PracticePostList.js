import React, { useEffect, useState } from 'react';

export const PracticePostList = () => {
    let fakePosts = [];
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((data) => {
                    fakePosts = data.slice(0, 20);
                    setPosts(fakePosts);
                })
                .catch((err) => console.error(err));
        }, 2000);
    }, []);

    return (
        <>
            {posts.length === 0 ? (
                <h2>loading...</h2>
            ) : (
                posts.map((content, i) => (
                    <div className="content">
                        <div className="numberTitle">
                            <span className="number">No. {i + 1} - </span>
                            <span className="title">{content.title}</span>
                        </div>
                        <p className="body">{content.body}</p>
                    </div>
                ))
            )}
        </>
    );
};
