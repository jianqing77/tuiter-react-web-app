import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../../../services/tuits-thunks';
/****************************************************************
 * tuit-stats.js
 * Part of TuitListComponent which include tuit post's statistics
 *****************************************************************/
const TuitStats = ({ post }) => {
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(post.liked);
    const [likes, setLikes] = useState(post.likes);
    const [disliked, setDisliked] = useState(post.disliked || 0);
    const [dislikes, setDislikes] = useState(post.dislikes || 0);

    const handleLike = () => {
        dispatch(
            updateTuitThunk({
                ...post,
                liked: !liked,
                likes: liked ? likes - 1 : likes + 1,
            })
        ).then(() => {
            setLiked(!liked);
            setLikes(liked ? likes - 1 : likes + 1);
        });
    };

    const handleDislike = () => {
        dispatch(
            updateTuitThunk({
                ...post,
                disliked: !disliked,
                dislikes: disliked ? dislikes - 1 : dislikes + 1,
            })
        ).then(() => {
            setDisliked(!disliked);
            setDislikes(disliked ? dislikes - 1 : dislikes + 1);
        });
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
                        {liked ? (
                            <FontAwesomeIcon
                                icon={icon({ name: 'heart', style: 'solid' })}
                                style={{ color: '#dc3545' }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={icon({ name: 'heart', style: 'regular' })}
                            />
                        )}
                    </a>
                    <span className="ms-1">{likes}</span>
                </div>

                <div className="col">
                    <a href="#" onClick={handleDislike}>
                        {disliked ? (
                            <FontAwesomeIcon
                                icon={icon({ name: 'thumbs-down', style: 'solid' })}
                                style={{ color: '#dc3545' }}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={icon({ name: 'thumbs-down', style: 'regular' })}
                            />
                        )}
                    </a>
                    <span className="ms-1">{dislikes}</span>
                </div>

                <div className="col">
                    <FontAwesomeIcon
                        icon={icon({ name: 'share-nodes', style: 'solid' })}
                    />
                </div>
            </div>
        </div>
    );
};

// $(WhoToFollowListItem);
export default TuitStats;
