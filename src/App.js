import logo from './logo.svg';
import './App.css';
// import Labs component
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';

function App() {
    // returning an HTML tag, not an HTML string
    // Reason: React.js uses a library called JSX or JavaScript XML
    // JSX allows mixing and matching JavaScript and XML seamlessly
    // and HTML is just a particular flavor of XML.
    // Wrap the HTML content in a DIV element with the container class
    return (
        <div className="container">
            <HelloWorld />
            <Labs /> {/* the Lab component */}
        </div>
    );
}
export default App;
