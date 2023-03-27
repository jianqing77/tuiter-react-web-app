import { useSelector } from 'react-redux';
import WhoToFollowListItem from './who-to-follow-list-item';

const WhoToFollowListComponent = () => {
    // retrieve state from the store
    const whoArray = useSelector((state) => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {whoArray.map((who) => (
                <WhoToFollowListItem key={who._id} who={who} />
            ))}
        </ul>
    );
};

export default WhoToFollowListComponent;
