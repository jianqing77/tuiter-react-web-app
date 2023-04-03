import React from 'react';
// import postsArray from './posts.json';
import PostSummaryItem from './post-summary-item';
// replace getting tuits from a file to getting tuits from the store

import { useSelector } from 'react-redux';

const PostSummaryListComponent = () => {
    // get tuits from the state in the store
    const postsArray = useSelector((state) => state.tuits);
    return (
        <ul className="list-group">
            {postsArray.map((post) => (
                <PostSummaryItem key={post._id} post={post} />
            ))}
        </ul>
    );
};
export default PostSummaryListComponent;
