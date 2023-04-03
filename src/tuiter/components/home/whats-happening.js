import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTuit } from '../../reducers/tuits-reducer';

import { createTuitThunk } from '../../../services/tuits-thunks';
/**********************************************************************
 * whats-happening.js
 * Implementation of forms using React and Redux
 **********************************************************************/

const WhatsHappeningComponent = () => {
    /** The following lines define two state variables using the useState hook.
     * whatsHappening state variable: holds the value of the textarea input
     * setWhatsHappening: a function that updates the state value.
     * The placeholder state variable: holds the placeholder value of the textarea,
     * setPlaceholder: a function that updates the state value.
     */
    let [whatsHappening, setWhatsHappening] = useState('');
    const [placeholder, setPlaceholder] = useState("What's happening?"); // retrieve dispatch function with hook
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    // button tuit handler
    const tuitClickHandler = () => {
        const now = new Date();
        const timeDiff = now - new Date();
        let time;
        const minute = 60 * 1000;
        const hour = minute * 60;
        if (timeDiff < minute) {
            time = Math.floor(timeDiff / 1000) + 's';
        } else if (timeDiff < hour) {
            time = Math.floor(timeDiff / minute) + 'm';
        } else {
            time = Math.floor(timeDiff / hour) + 'h';
        }
        const newTuit = {
            tuit: whatsHappening,
            userName: profile.firstName + ' ' + profile.lastName,
            handle: profile.handle,
            time: time,
            image: profile.profilePicture,
        };
        // dispatch(createTuit(newTuit));
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening('');
        setPlaceholder("What's happening?");
    };

    // text area change handler
    const textareaChangeHandler = (event) => {
        setWhatsHappening(event.target.value);
        setPlaceholder('');
    };

    return (
        <div className="row">
            <div className="col-auto">
                <img
                    src={require(`../../images/${profile.profilePicture}`)}
                    width={60}
                    className="rounded-circle"
                    alt="profile avatar"
                />
            </div>
            <div className="col-10">
                <textarea
                    value={whatsHappening}
                    placeholder={placeholder}
                    className="form-control border-0"
                    onChange={textareaChangeHandler}></textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
};

export default WhatsHappeningComponent;
