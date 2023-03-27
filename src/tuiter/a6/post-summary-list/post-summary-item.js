import React from 'react';

const PostSummaryItem = ({ post }) => {
    return (
        <div className="list-group-item d-flex justify-content-between align-items-left">
            <div className="ms-1 me-4">
                <span className="text-muted d-block">{post.topic}</span>
                <span className="fw-bold">{post.userName}</span>
                <i className="fa-solid fa-circle-check"></i>
                <span className="text-muted"> . {post.time}</span>
                <span className="d-block">{post.title}</span>
            </div>
            <img className="rounded post-image" src={require(`../images/${post.image}`)} alt="Post" />
        </div>
    );
};

// $(WhoToFollowListItem);
export default PostSummaryItem;
