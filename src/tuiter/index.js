import React from 'react';
import './classes/index.css';
import { Routes, Route } from 'react-router';

import { configureStore } from '@reduxjs/toolkit'; // import configureStore
import { Provider } from 'react-redux'; // import the Provider component
// reducer
import whoReducer from './reducers/who-reducer'; // whotofollowlist reducer
import tuitsReducer from './reducers/tuits-reducer'; // tuits reducer

// components
import NavigationSidebar from './components/navigation-sidebar';
import WhoToFollowListComponent from './components/who-to-follow-list';
import PostSummaryListComponent from './components/post-summary-list';
import HomeComponent from './components/home';
// configure the store
const store = configureStore({
    reducer: {
        who: whoReducer,
        tuits: tuitsReducer,
    },
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home" />
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6 mb-3" style={{ position: 'relative' }}>
                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route index path="home" element={<HomeComponent />} />
                        <Route path="explore" element={<HomeComponent />} />
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route index element={<WhoToFollowListComponent />} />
                        <Route path="home" element={<WhoToFollowListComponent />} />
                        <Route path="explore" element={<WhoToFollowListComponent />} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;
