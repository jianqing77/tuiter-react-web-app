// 1st thing: import the React.js library.
// All React components must at least import this one library
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    // const active = paths[2];
    const active = paths[2] ? paths[2] : 'home';

    return (
        // wrapped with a parent element div or tags with no names
        // use classname instead of class
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'home', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'hashtag', style: 'solid' })} />
                </span>{' '}
                <span className="d-none d-xl-inline ">Explore</span>
            </Link>
            <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'bell', style: 'solid' })} />
                </span>{' '}
                <span className="d-none d-xl-inline ">Notifications</span>
            </a>
            <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'envelope', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">Messages</span>
            </a>
            <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'bookmark', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">Bookmarks</span>
            </a>
            <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'list', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'user', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">Profile</span>
            </Link>

            <a className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <span className="me-1">
                    <FontAwesomeIcon icon={icon({ name: 'info-circle', style: 'solid' })} />
                </span>
                <span className="d-none d-xl-inline ">More</span>
            </a>
        </div>
    );
};
// const NavigationSidebar = () => {
//     return null;
// };
export default NavigationSidebar;
