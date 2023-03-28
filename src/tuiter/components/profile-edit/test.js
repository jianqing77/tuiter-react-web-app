import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFirstName } from '../../reducers/profile-reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const EditProfileComponent = ({ setIsEditingProfile }) => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState(profile.firstName);

    // define handlers
    const FirstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    };

    const saveClickHandler = () => {
        dispatch(updateFirstName({ firstName }));
        setIsEditingProfile(false);
    };

    const cancelClickHandler = () => {
        setFirstName(profile.firstName);
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
                <div className="col-3">
                    <button
                        className="btn bg-black rounded-pill float-end ms-xxl-1 text-white"
                        onClick={saveClickHandler}>
                        <span className="mx-2">Save</span>
                    </button>
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
                                onChange={FirstNameChangeHandler}></textarea>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <label for="birthdate">Birth Date &#183;</label>
                    <span>
                        <a href="">Edit</a>
                    </span>
                    <br />
                    <input type="date" id="birthdate" name="birthdate" />
                </div>
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
