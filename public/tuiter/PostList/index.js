import PostItem from './PostItem.js';
import posts from './posts.js';

const PostList = () => {
    return `
        <ul>
            ${posts
                .map((post) => {
                    return PostItem(post);
                })
                .join('')}
        </ul>
    `;
};

// $(WhoToFollowList);

export default PostList;
