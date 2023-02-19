import NavItem from './NavItem.js';
import navs from './navs.js';

const NavList = () => {
    // use the NavItem function to render all the navigation items as shown below.
    return `
        <nav class="flex-column">
            <ul class="nav navbar-nav">
                ${navs
                    .map((nav) => {
                        return NavItem(nav);
                    })
                    .join('')}
            </ul>
        </nav> 

    `;
};

export default NavList;
