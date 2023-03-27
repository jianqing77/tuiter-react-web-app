import React from 'react';
import TuitsListComponent from './tuit-list';
import WhatsHappeningComponent from './whats-happening';

const HomeComponent = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappeningComponent />
            <TuitsListComponent />
        </>
    );
};
export default HomeComponent;
