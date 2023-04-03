import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

/****************************************************************
 * tuit-stats.js
 * Part of TuitListComponent which include tuit post's statistics
 *****************************************************************/
const TuitStats = ({ post, onLikePost }) => {
    const handleLike = (event) => {
        event.preventDefault();
        onLikePost({ _id: post._id });
    };

    return (
        <div className="container">
            <div className=" me-4 row mt-2">
                <div className="col">
                    <FontAwesomeIcon icon={icon({ name: 'comment', style: 'regular' })} />
                    <span className="ms-1">{post.replies}</span>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={icon({ name: 'retweet', style: 'solid' })} />
                    <span className="ms-1">{post.retuits}</span>
                </div>
                <div className="col">
                    <a href="#" onClick={handleLike}>
                        {post.liked ? (
                            <FontAwesomeIcon
                                icon={icon({ name: 'heart', style: 'solid' })}
                                style={{ color: '#dc3545' }}
                            />
                        ) : (
                            <FontAwesomeIcon icon={icon({ name: 'heart', style: 'regular' })} />
                        )}
                    </a>
                    <span className="ms-1">{post.likes}</span>
                </div>

                <div className="col">
                    <FontAwesomeIcon icon={icon({ name: 'share-nodes', style: 'solid' })} />
                </div>
            </div>
        </div>
    );
};

// $(WhoToFollowListItem);
export default TuitStats;
