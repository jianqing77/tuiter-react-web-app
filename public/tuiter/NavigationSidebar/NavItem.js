const NavItem = (nav) => {
    return `
        <a class="list-group-item list-group-item-action" href=${nav.navLink}>
            <span><i class="${nav.navIcon}"></i></span>
            <span class="d-none d-xl-inline ">${nav.navName}</span>
        </a>
    `;
};

export default NavItem;
