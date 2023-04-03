import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteTuit } from '../../reducers/tuits-reducer';
import { deleteTuitThunk } from '../../../services/tuits-thunks';

/****************************************************************
 * tuit-item.js
 * Part of TuitListComponent which include tuit post's main text
 *****************************************************************/

const TuitItem = ({ post }) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };

    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="ms-1 me-4 " style={{ width: '100%' }}>
                <div>
                    <span className="fw-bold ms-1">{post.userName}</span>
                    <span className="ms-1">
                        <FontAwesomeIcon
                            icon={icon({ name: 'circle-check', style: 'solid' })}
                        />
                    </span>
                    <span className="fw-bold ms-1">{post.handle}</span>
                    <span className="text-muted ms-1">&#183; {post.time}</span>
                    <i
                        className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="d-block ms-1">{post.tuit}</span>
                </div>
            </div>
        </div>
    );
};

// $(WhoToFollowListItem);
export default TuitItem;
