import React from 'react';
import homePostArray from './posts.json';
import HomePostItem from './home-post-item';

const HomePostList = () => {
    return (
        <ul className="list-group">
            {homePostArray.map((post) => (
                <HomePostItem key={post._id} post={post} />
            ))}
        </ul>
    );
};
export default HomePostList;
