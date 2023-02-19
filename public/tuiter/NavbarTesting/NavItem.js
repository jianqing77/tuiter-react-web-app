const NavItem = (nav) => {
    return `
        <li class="nav-item py-1">
            <a class="nav-link ms-3" href=${nav.navLink}>
                <span><i class="${nav.navIcon}"></i></span>
                <span class="d-none d-xl-inline ms-3">${nav.navName}</span>
            </a>
        </li>
    `;
};

export default NavItem;
