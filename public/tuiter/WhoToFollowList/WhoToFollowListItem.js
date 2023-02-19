const WhoToFollowListItem = (who) => {
    return `
        <li class="list-group-item">
            <div class="row">
                <div class="col-xl-2 col-lg-2 pe-none ps-xl-3 ps-lg-1">
                    <img
                        src=${who.avatarIcon}
                        alt="logo Java"
                        class="sidebar-image rounded-circle" />
                </div>
                <div class="col-xl-7 col-lg-7 pe-none ps-xl-1 ps-lg-0">
                    <div class="fw-bold">
                        ${who.userName}
                        <i class="fa-solid fa-circle-check ms-1"></i>
                    </div>
                    ${who.handle}
                </div>
                <div class="col-xl-3 col-lg-3 no-padding pt-1">
                    <button class="btn btn-primary rounded-pill ms-xxl-1">Follow</button>
                </div>
            </div>
        </li> 
    `;
};

// $(WhoToFollowListItem);
export default WhoToFollowListItem;

// {
// cannot make sure the icon don't indent
/* <li class="list-group-item d-flex justify-content-between align-items-center">
<img
    src=${who.avatarIcon}
    alt="logo Java"
    class="sidebar-image rounded-circle" />

<div class="ms-2 me-auto">
    <div class="d-inline fw-bold">${who.userName}</div>
    <div class="d-inline"><i class="fas fa-check-circle"></i></div>
    <div>@${who.handle}</div>
</div>
<button type="button" class="btn btn-primary bg-primary rounded-pill">Follow</button>
</li> */
// }
