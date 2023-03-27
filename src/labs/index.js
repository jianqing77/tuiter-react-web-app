// create & export the lab component
import Nav from '../nav'; // import the navigation component
import Assignment6 from './a6';
import Assignment7 from './a7';
import { Routes, Route } from 'react-router';

// This component is a React function component that exports the `Labs` component.
// It imports a navigation component named `Nav` from a file path named `../nav`.
// It also imports two other components `Assignment6` and `Assignment7` from their respective files, which are used to render the lab assignments.
// The `Labs` component returns a JSX element that renders the `Nav` component, and two `Route` components that are nested within a `Routes` component.
// The `Route` components are rendering the `Assignment6` and `Assignment7` components respectively when the user navigates to the corresponding URL paths.
// Finally, the `Labs` component is exported as the default export of the module.
function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route index element={<Assignment6 />} />
                <Route path="a7" element={<Assignment7 />} />
            </Routes>
        </div>
    );
}

export default Labs;
