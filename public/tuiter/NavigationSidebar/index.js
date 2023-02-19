import NavList from './NavList.js';

const NavigationSidebar = (active) => {
    return `
        <div class="list-group wd-bg-light-grey text-white">
            ${NavList()}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
  `;
};

export default NavigationSidebar;
