import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';

const PostSummaryList = () => {
    return `
        <div class="list-group">
            ${posts
                .map((post) => {
                    return PostSummaryItem(post);
                })
                .join('')}
        </div>
    `;
};

// $(WhoToFollowList);

export default PostSummaryList;

// $('#wd-postlist').append(`${PostSummaryList()}`);
