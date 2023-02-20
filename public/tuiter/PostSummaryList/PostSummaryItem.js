const PostSummaryItem = (post) => {
    return `
        <div class="list-group-item d-flex justify-content-between align-items-left">
            <div class="ms-1 me-4">
                <span class="text-muted d-block">${post.topic}</span>
                <span class="fw-bold text-white">${post.userName}</span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="text-muted"> - ${post.time}</span>
                <span class="d-block fw-bold text-white">
                    ${post.title}
                </span>
            </div>
            <img
                class="rounded post-image img-fluid"
                src=${post.image}
                alt="Image" />
        </div>
    `;
};

// $(WhoToFollowListItem);
export default PostSummaryItem;
