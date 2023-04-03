import React, { useEffect } from 'react';
// import postsArray from './posts.json';
import TuitItem from './tuit-item';
// replace getting tuits from a file to getting tuits from the store
import { useSelector, useDispatch } from 'react-redux';
import TuitStats from './tuit-stats';
import { likePostToggle } from '../../reducers/tuits-reducer';

/**********************************************************************
 * tuit-list.js
 * Include the tuit-list and tuit-stats components which render to be
 * a full post. This is included in the home/index.js to be a component
 * of the home page
 **********************************************************************/
const TuitsListComponent = () => {
    // get tuits from the state in the store
    const tuitsArray = useSelector((state) => state.tuits);

    // grab tuits and loading flag from reducer
    // Get the dispatch function from the store
    // on component load
    const dispatch = useDispatch();

    const likeTuitHandler = (tuit) => {
        dispatch(likePostToggle(tuit));
    };

    return (
        <div className="border rounded-top ">
            {tuitsArray.map((tuit, id) => (
                // tuit images
                <div key={id} className="border-bottom ms-3">
                    <div className="row py-3">
                        <div className="col-md-1 col-2">
                            <img
                                src={require(`../../images/${tuit.image}`)}
                                alt="avatar"
                                className="avatar-image rounded-circle"
                            />
                        </div>
                        <div className="col-md-11 col-10  ps-3">
                            <TuitItem post={tuit} />
                            <TuitStats post={tuit} onLikePost={likeTuitHandler} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default TuitsListComponent;
