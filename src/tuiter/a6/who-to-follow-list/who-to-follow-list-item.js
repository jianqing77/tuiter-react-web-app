import React from 'react';

const WhoToFollowListItem = ({ who }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-xl-2 col-lg-2 pe-none ps-xl-3 ps-lg-1">
                    <img
                        className="rounded-circle sidebar-image"
                        height={48}
                        src={require(`../images/${who.avatarIcon}`)}
                        alt="avatar icon"
                    />
                </div>
                <div className="col-xl-7 col-lg-7 pe-none ps-xl-1 ps-lg-0">
                    <div className="fw-bold">{who.userName}</div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-xl-3 col-lg-3 no-padding pt-1">
                    <button className="btn btn-primary rounded-pill float-end ms-xxl-1">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
