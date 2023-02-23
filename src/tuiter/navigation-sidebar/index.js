// 1st thing: import the React.js library.
// All React components must at least import this one library

import React from 'react';
const NavigationSidebar = ({
    // parameter: provide initial values for the sidebar
    active = 'explore',
}) => {
    return (
        // wrapped with a parent element div or tags with no names
        // use classname instead of class
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className="list-group-item">Home</a>
            <a className="list-group-item">Explore</a>
            <a className="list-group-item">Notifications</a>
            <a className="list-group-item">Messages</a>
            <a className="list-group-item">Bookmarks</a>
            <a className="list-group-item">Lists</a>
            <a className="list-group-item">Profile</a>
            <a className="list-group-item">More</a>
        </div>
    );
};
// const NavigationSidebar = () => {
//     return null;
// };
export default NavigationSidebar;
