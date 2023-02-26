import React from 'react';
import PostArray from './posts.json';
import PostItem from './post-item.js';

const HomeComponent = () => {
    return (
        <>
            {PostArray.map((post) => (
                <PostItem key={post._id} post={post} />
            ))}
        </>
    );
};
export default HomeComponent;
