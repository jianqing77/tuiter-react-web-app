import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTuit } from '../../reducers/tuits-reducer';

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
    const [placeholder, setPlaceholder] = useState("What's happening?");

    // retrieve dispatch function with hook
    const dispatch = useDispatch();

    // button tuit handler
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
        };
        dispatch(createTuit(newTuit));
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
                <img src={require(`../../images/nasa.jpg`)} width={60} />
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
