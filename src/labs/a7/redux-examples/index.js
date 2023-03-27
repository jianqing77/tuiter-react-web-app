import React from 'react';
// Import the createStore function to store data from reducers.
// import { legacy_createStore as createStore } from 'redux';
// instead of createStore, import the configureStore function to collate all reducers
import { configureStore } from '@reduxjs/toolkit';
// Import the Provider which will deliver the data.
import { Provider } from 'react-redux';
// Import the component that will consume the data.
import HelloReduxExampleComponent from './hello-redux-example-component';
// Import the reducer that will calculate/generate the data.
import hello from './reducers/hello';
import todos from './reducers/todos-reducer'; // import the new reducer
import Todos from './todos-component'; // import new component to render todos

// Create a store to hold the data. The `createStore` function takes in the reducer function as an argument.
// const store = createStore(hello);
const store = configureStore({
    reducer: { hello, todos },
});

// Define the `ReduxExamples` component.
const ReduxExamples = () => {
    return (
        // The `Provider` component wraps child elements and delivers data stored in the `store` to them.
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                {/* The `HelloReduxExampleComponent` component consumes the data from the `store`. */}
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};

// Export the `ReduxExamples` component so it can be used in other parts of the application.
export default ReduxExamples;
