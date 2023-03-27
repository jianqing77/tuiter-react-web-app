import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProfileContentComponent = () => {
    // get tuits from the state in the store
    // const tuitsArray = useSelector((state) => state.tuits);
    // Get the dispatch function from the store
    const dispatch = useDispatch();

    // const likeTuitHandler = (tuit) => {
    //     dispatch(likePostToggle(tuit));
    // };

    return (
        <div>
            <h2>Post content</h2>
        </div>
    );
};
export default ProfileContentComponent;
