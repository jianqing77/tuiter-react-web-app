import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateFirstName,
    updateLastName,
    updateBio,
    updateLocation,
    updateWebsite,
    updateDateOfBirth,
} from '../../reducers/profile-reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const EditProfileComponent = ({ setIsEditingProfile }) => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [isEditingDate, setIsEditingDate] = useState(false);

    const [birthDay, setBirthDay] = useState(profile.dateOfBirth.split('/')[1]);
    const [birthMonth, setBirthMonth] = useState(profile.dateOfBirth.split('/')[0]);
    const [birthYear, setBirthYear] = useState(profile.dateOfBirth.split('/')[2]);

    // define handlers
    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    };

    const bioChangeHandler = (event) => {
        setBio(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    };

    const websiteChangeHandler = (event) => {
        setWebsite(event.target.value);
    };

    const birthDayChangeHandler = (event) => {
        setBirthDay(event.target.value);
    };

    const birthMonthChangeHandler = (event) => {
        setBirthMonth(event.target.value);
    };

    const birthYearChangeHandler = (event) => {
        setBirthYear(event.target.value);
    };

    const saveBirthdayHandler = () => {
        const newDateOfBirth = `${birthMonth}/${birthDay}/${birthYear}`;
        // check if user entered a valid date
        const dateObj = new Date(newDateOfBirth);

        if (isNaN(dateObj.getTime())) {
            alert('Invalid date!');
            return;
        }
        // dispatch the update date of birth with new date
        dispatch(updateDateOfBirth({ dateOfBirth: newDateOfBirth }));
        setIsEditingDate(false); // change is editing date to false
    };

    const saveClickHandler = () => {
        dispatch(updateFirstName({ firstName }));
        dispatch(updateLastName({ lastName }));
        dispatch(updateBio({ bio }));
        dispatch(updateLocation({ location }));
        dispatch(updateWebsite({ website }));
        // switch to the ProfileContentComponent
        // set the indicator to false
        setIsEditingProfile(false);
    };

    const formatBirthday = (dateString) => {
        const dateObj = new Date(dateString.replace('/', '-')); // replace '/' with '-' for Safari support
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    };

    const cancelClickHandler = () => {
        // reset the input fields to the initial values
        // setName(`${profile.firstName} ${profile.lastName}`);
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setBio(profile.bio);
        setLocation(profile.location);
        setWebsite(profile.website);
        // switch to the ProfileContentComponent
        setIsEditingProfile(false);
    };

    return (
        <div className="container">
            {/* <!---------------- title -----------------> */}
            <div className="row align-items-center mt-2 d-flex">
                <div className="col-1">
                    <FontAwesomeIcon
                        icon={icon({ name: 'xmark', style: 'solid' })}
                        size="xl"
                        className="ps-4"
                        onClick={cancelClickHandler}
                    />
                </div>
                <div className="col-8">
                    <span className="align-middle h4">Edit Profile</span>
                </div>
                <div className="col-3">
                    <button
                        className="btn bg-black rounded-pill float-end ms-xxl-1 text-white"
                        onClick={saveClickHandler}>
                        <span className="mx-2">Save</span>
                    </button>
                </div>
            </div>
            {/* <!------------ background & avatar & button -------> */}
            <div className="position-relative">
                <div className="d-flex justify-content-center mt-2">
                    <img src={require(`../../images/background.jpg`)} className="img-fluid bg-profile" alt="banner" />
                    <img
                        src={require(`../../images/black.jpg`)}
                        className="img-fluid opacity-50 bg-profile position-absolute top-0 left-0 right-0 bottom-0"
                        alt="black overlay"
                    />
                    <div
                        className="position-absolute d-flex align-content-center justify-content-between"
                        style={{ top: '140px' }}>
                        <span>
                            <FontAwesomeIcon
                                icon={icon({ name: 'camera', style: 'solid' })}
                                size="3x"
                                style={{ color: '#e3e3e3' }}
                            />
                        </span>
                        <span className="ms-4">
                            <FontAwesomeIcon
                                icon={icon({ name: 'circle-xmark', style: 'solid' })}
                                size="3x"
                                style={{ color: '#e3e3e3' }}
                            />
                        </span>
                    </div>
                    {/* <!-- Avatar --> */}
                    <div>
                        <img
                            src={require(`../../images/monica.jpg`)}
                            className="position-absolute translate-middle-x icon-150px rounded-circle avatar-location"
                            alt="avatar"
                        />
                        <img
                            src={require(`../../images/black.jpg`)}
                            className="opacity-25 position-absolute translate-middle-x icon-150px rounded-circle avatar-location"
                            alt="black overlay for avatar"
                        />
                        <div
                            className="position-absolute translate-middle-x rounded-circle avatar-location"
                            style={{ marginBottom: '60px' }}>
                            <FontAwesomeIcon
                                icon={icon({ name: 'camera', style: 'solid' })}
                                size="3x"
                                style={{ color: '#e3e3e3' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!------------ Content -------> */}
            <div className="mt-5 ms-4">
                {/* <!-- change name --> */}
                <div className="card mt-2 border">
                    <div className="d-flex justify-content-center">
                        <div className="card-body">
                            <label for="firstName" className="form-label text-muted">
                                First Name
                            </label>
                            <textarea
                                className="form-control border-0 p-0"
                                id="firstName"
                                rows="1"
                                placeholder={firstName}
                                style={{ outline: 'none', boxShadow: 'none', fontSize: '19px' }}
                                onChange={firstNameChangeHandler}></textarea>
                        </div>
                        <div className="card-body">
                            <label for="lastName" className="form-label text-muted">
                                Last Name
                            </label>
                            <textarea
                                className="form-control border-0 p-0"
                                id="lastName"
                                rows="1"
                                placeholder={lastName}
                                style={{ outline: 'none', boxShadow: 'none', fontSize: '19px' }}
                                onChange={lastNameChangeHandler}></textarea>
                        </div>
                    </div>
                </div>
                {/* <!-- change bio --> */}
                <div className="card mt-2 border">
                    <div className="card-body">
                        <label for="bio" className="form-label text-muted">
                            Bio
                        </label>
                        <textarea
                            className="form-control border-0 p-0"
                            id="bio"
                            rows="4"
                            placeholder={bio}
                            style={{ outline: 'none', boxShadow: 'none', fontSize: '19px' }}
                            onChange={bioChangeHandler}></textarea>
                    </div>
                </div>
                {/* <!-- change location --> */}
                <div className="card mt-2 border">
                    <div className="card-body">
                        <label for="location" className="form-label text-muted">
                            Location
                        </label>
                        <textarea
                            className="form-control border-0 p-0"
                            id="location"
                            rows="1"
                            placeholder={location}
                            style={{ outline: 'none', boxShadow: 'none', fontSize: '19px' }}
                            onChange={locationChangeHandler}></textarea>
                    </div>
                </div>
                {/* <!-- change website --> */}
                <div className="card mt-2 border">
                    <div className="card-body">
                        <label for="website" className="form-label text-muted">
                            Website
                        </label>
                        <textarea
                            className="form-control border-0 p-0"
                            id="website"
                            rows="1"
                            placeholder={website}
                            style={{ outline: 'none', boxShadow: 'none', fontSize: '19px' }}
                            onChange={websiteChangeHandler}></textarea>
                    </div>
                </div>

                {/* switch if user is editing date */}
                {isEditingDate ? (
                    <div className="my-3">
                        <label for="birthdate">Birth Date</label>
                        <div className="d-flex">
                            <input
                                type="text"
                                id="birthDay"
                                name="birthDay"
                                style={{ width: '70px' }}
                                placeholder="DD"
                                onChange={birthDayChangeHandler}
                            />
                            <span className="mx-1">/</span>
                            <input
                                type="text"
                                id="birthMonth"
                                name="birthMonth"
                                style={{ width: '70px' }}
                                placeholder="MM"
                                onChange={birthMonthChangeHandler}
                            />
                            <span className="mx-1">/</span>
                            <input
                                type="text"
                                id="birthYear"
                                name="birthYear"
                                style={{ width: '100px' }}
                                placeholder="YYYY"
                                onChange={birthYearChangeHandler}
                            />
                            <div>
                                <button className="btn btn-primary mx-2" onClick={saveBirthdayHandler}>
                                    Save
                                </button>
                                <button className="btn btn-secondary" onClick={() => setIsEditingDate(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="my-3">
                        <label for="birthdate">Birth Date &#183;</label>
                        <span>
                            <a href="#" onClick={() => setIsEditingDate(true)} className="ms-1">
                                Edit
                            </a>
                        </span>
                        <br />
                        <span>{formatBirthday(profile.dateOfBirth)}</span>
                    </div>
                )}
            </div>
            {/* <!------------ Footer ------------> */}
            <footer className="ms-4 me-3 mt-2 d-flex align-items-center">
                <span className="h5 me-auto text-start">Switch to Professional</span>
                <span>
                    <FontAwesomeIcon icon={icon({ name: 'chevron-right', style: 'solid' })} />
                </span>
            </footer>
        </div>
    );
};

export default EditProfileComponent;
