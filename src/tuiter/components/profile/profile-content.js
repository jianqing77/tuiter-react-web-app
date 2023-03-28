import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ProfileContentComponent = ({ setIsEditingProfile }) => {
    // get tuits from the state in the store
    const profile = useSelector((state) => state.profile);
    const editProfileClickHandler = () => {
        setIsEditingProfile(true);
    };

    const formatBirthday = (dateString) => {
        const dateObj = new Date(dateString.replace('/', '-')); // replace '/' with '-' for Safari support
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    };
    const formatJoinedMonth = (dateString) => {
        const [month, year] = dateString.split('/');
        const dateObj = new Date(year, month - 1, 1);
        const options = { month: 'long', year: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    };

    const formatTuitNum = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className="container border py-2">
            {/* <!---------------- arrow and name -----------------> */}
            <div className="row align-items-center">
                <div className="col-1 ps-4">
                    <FontAwesomeIcon icon={icon({ name: 'arrow-left', style: 'solid' })} size="lg" />
                </div>
                <div className="col-11">
                    <h4 className="pt-1">
                        {profile.firstName} {profile.lastName}
                    </h4>
                    <p>{formatTuitNum(profile.tuitsNum)} Tweets</p>
                </div>
            </div>
            {/* <!--- background & avatar & button --> */}
            <div className="position-relative">
                <div className="d-flex justify-content-center mt-2">
                    <img
                        src={require(`../../images/${profile.bannerPicture}`)}
                        className="img-fluid bg-profile"
                        alt="banner"
                    />
                    <img
                        src={require(`../../images/${profile.profilePicture}`)}
                        className="position-absolute translate-middle-x icon-150px rounded-circle"
                        style={{ bottom: '-30px', left: '100px' }}
                        alt="profile"
                    />
                </div>
                <div className="d-flex justify-content-end mt-2">
                    {/* Wrap the button in a Link component */}
                    <button
                        className="btn btn-primary rounded-pill float-end ms-xxl-1"
                        onClick={editProfileClickHandler}>
                        Edit Profile
                    </button>
                </div>
            </div>
            {/* <!---- Content ----> */}
            <div className="mt-5 ms-4">
                <div className="h4 fw-bold">
                    {profile.firstName} {profile.lastName}
                </div>
                <div className="text-muted">{profile.handle} </div>
                <div className="mt-2">{profile.bio} </div>
                <div className="me-3 mt-2">
                    <span>
                        <FontAwesomeIcon icon={icon({ name: 'location-dot', style: 'solid' })} />
                        <span className="ms-2">{profile.location}</span>
                    </span>
                    <span className="ms-3">
                        <FontAwesomeIcon icon={icon({ name: 'cake-candles', style: 'solid' })} />
                        <span className="ms-2">Born {formatBirthday(profile.dateOfBirth)} </span>
                    </span>
                    <span className="ms-3">
                        <FontAwesomeIcon icon={icon({ name: 'calendar-days', style: 'solid' })} />
                        <span className="ms-2">Joined {formatJoinedMonth(profile.dateJoined)} </span>
                    </span>
                </div>
            </div>
            {/* <!------------ Footer ------------> */}
            <footer className="ms-4 me-3 mt-2">
                <span>
                    <span className="fw-bold">{profile.followingCount}</span>
                    <span className="ms-1">Following</span>
                </span>
                <span className="ms-3">
                    <span className="ms-1 fw-bold">{profile.followersCount}</span>
                    <span className="ms-1">Followers</span>
                </span>
            </footer>
        </div>
    );
};
export default ProfileContentComponent;
