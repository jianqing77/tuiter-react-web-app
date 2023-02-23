import logo from './logo.svg';
import './App.css';
// import components
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
// import browserRouter
// BrowserRouter tag sets up the base mechanism to navigate between multiple components
// to navigate between the three components within the BrowserRouter tag
import { BrowserRouter } from 'react-router-dom';
// To navigate between components we use the Route component from React Router to
// declare paths and map them to corresponding component we want to render for that path
import { Routes, Route } from 'react-router';

function App() {
    // returning an HTML tag, not an HTML string
    // Reason: React.js uses a library called JSX or JavaScript XML
    // JSX allows mixing and matching JavaScript and XML seamlessly
    // and HTML is just a particular flavor of XML.
    // Wrap the HTML content in a DIV element with the container class
    return (
        // Add browerRouter tag
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/labs" element={<Labs />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/tuiter" element={<Tuiter />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
