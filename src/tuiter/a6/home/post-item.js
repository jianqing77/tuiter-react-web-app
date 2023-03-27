import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const PostItem = ({ post }) => {
    return (
        <li className="d-flex justify-content-between align-items-center border p-3 ">
            <div className="row ">
                <div className="col-md-1 col-2">
                    {post.retweet_status.isRetweeted ? (
                        <div class="text-end ms-4">
                            <FontAwesomeIcon icon={icon({ name: 'retweet', style: 'solid' })} />
                        </div>
                    ) : null}
                    <img
                        src={require(`../images/${post.user.avatarIcon}`)}
                        alt="avatar"
                        className="avatar-image rounded-circle"
                    />
                </div>
                <main className="col-md-11 col-10 pe-none ps-3">
                    <div className="d-flex justify-content-between">
                        <div>
                            {/* check if the post was retweeted */}
                            {post.retweet_status.isRetweeted ? (
                                <span className="fw-bold d-block text-muted retweets-text">
                                    {post.retweet_status.retweetedUser}Retweeted
                                </span>
                            ) : null}
                            <span className="fw-bold">{post.user.userName}</span>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                alt=""
                                className="icon-20px mb-1"
                            />
                            <span className="text-muted ms-1">@{post.user.handle} &#183;</span>
                            <span className="text-muted">{post.user.time}</span>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-ellipsis-h verified-icon pe-1"></i>
                            </span>
                        </div>
                    </div>
                    {/* tweet brief */}
                    <div className="mb-2">
                        <span>{post.user.contentBrief}</span>
                        {post.user.externalLink ? (
                            <span>
                                <span> → </span>
                                <a href={post.user.externalLink} className="text-decoration-none tweets-light-blue">
                                    {post.user.linkText}
                                </a>
                            </span>
                        ) : null}
                    </div>
                    {/* ******************** tweet image ******************** */}
                    {post.user.image ? (
                        <div>
                            <img
                                src={require(`../images/${post.user.image}`)}
                                className="card-img-top rounded-4"
                                alt="..."
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ) : null}

                    {/* ******************** tweet content ******************** */}
                    {post.retweet_status && post.retweet_status.retweetedContent ? (
                        <div className="card mx-auto">
                            <div className="m-2">
                                <img
                                    src={require(`../images/${post.retweet_status.originalUser.avatarIcon}`)}
                                    alt="avatar"
                                    className="retweets-avatar-image rounded-circle"
                                />
                                <span className="fw-bold ms-1">{post.retweet_status.originalUser.userName}</span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
                                    alt="verified"
                                    className="icon-20px mb-1"
                                />
                                <span className="text-muted ms-1">
                                    @{post.retweet_status.originalUser.handle} &#183;
                                </span>
                                <span className="text-muted">{post.retweet_status.originalUser.time}</span>
                                <span className="card-text d-block">
                                    {post.retweet_status.originalUser.contentBrief}
                                    {post.retweet_status.originalUser.externalLink ? (
                                        <span>
                                            <span> → </span>
                                            <a
                                                href={post.retweet_status.originalUser.externalLink}
                                                className="text-reset text-decoration-none">
                                                {post.retweet_status.originalUser.linkText}
                                            </a>
                                        </span>
                                    ) : null}
                                </span>
                            </div>
                        </div>
                    ) : null}
                    {/* ******************** tweet Footer ******************** */}
                    <footer className="d-flex justify-content-between mt-3 text-muted me-5">
                        <div>
                            <FontAwesomeIcon icon={icon({ name: 'comment', style: 'regular' })} />
                            <span className="ms-md-2 ms-1">{post.user.numComments}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={icon({ name: 'retweet', style: 'solid' })} />
                            <span className="ms-md-2 ms-1">{post.user.numRetweet}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={icon({ name: 'heart', style: 'regular' })} />
                            <span className="ms-md-2 ms-1">{post.user.numLikes}</span>
                        </div>
                        <div className="me-5">
                            <FontAwesomeIcon icon={icon({ name: 'arrow-up-from-bracket', style: 'solid' })} />
                        </div>
                    </footer>
                </main>
            </div>
            {/* header: user info */}
        </li>
    );
};

// $(WhoToFollowListItem);
export default PostItem;
