import NavItem from './NavItem.js';
import navs from './navs.js';

const NavigationSidebar = (active) => {
    return `
        <div class="list-group">
            <a class="list-group-item list-group-item-action" href="#">
                <span><i class="fa-brands fa-twitter"></i></span>
                <span class="d-none d-xl-inline "></span>
            </a>
            ${navs
                .map((nav) => {
                    return NavItem(nav, active);
                })
                .join('')}
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
// fa-brands fa-twitter
