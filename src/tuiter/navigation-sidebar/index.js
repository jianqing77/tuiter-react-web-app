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
            <a
                className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`}>
                Home
            </a>
            <a
                className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                Explore
            </a>
            <a
                className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
                Notifications
            </a>
            <a
                className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
                Messages
            </a>
            <a
                className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
                Bookmarks
            </a>
            <a
                className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
                Lists
            </a>
            <a
                className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                Profile
            </a>
            <a
                className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                More
            </a>
        </div>
    );
};
// const NavigationSidebar = () => {
//     return null;
// };
export default NavigationSidebar;
