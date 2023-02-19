import NavItem from './NavItem.js';
import navs from './navs.js';

const NavList = () => {
    // use the NavItem function to render all the navigation items as shown below.
    return `
        ${navs
            .map((nav) => {
                return NavItem(nav);
            })
            .join('')}
    `;
};

export default NavList;
