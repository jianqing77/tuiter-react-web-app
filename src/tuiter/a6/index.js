// import { Link } from 'react-router-dom';
import './classes/index.css';
import NavigationSidebar from './navigation-sidebar';
import WhoToFollowList from './who-to-follow-list/index';
import ExploreComponent from './explore';
import { Routes, Route } from 'react-router';
import HomeComponent from './home';

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore" />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6 mb-3" style={{ position: 'relative' }}>
                <Routes>
                    <Route index element={<ExploreComponent />} />
                    <Route path="home" element={<HomeComponent />} />
                    <Route path="explore" element={<ExploreComponent />} />
                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route index element={<WhoToFollowList />} />
                    <Route path="home" element={<WhoToFollowList />} />
                    <Route path="explore" element={<WhoToFollowList />} />
                </Routes>
            </div>
        </div>
    );
}
export default Tuiter;
