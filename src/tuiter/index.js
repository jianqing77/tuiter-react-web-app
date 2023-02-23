import { Link } from 'react-router-dom';

function Tuiter() {
    return (
        <div>
            {/* add navigation links */}
            <Link to="/">Lab</Link> |<Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
            <h1>Tuiter</h1>
        </div>
    );
}
export default Tuiter;
