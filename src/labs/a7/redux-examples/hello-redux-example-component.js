// The component uses redux's useSelector hook to extract the message from the reducer
import React from 'react';
import { useSelector } from 'react-redux'; // import useSelector hook

const HelloReduxExampleComponent = () => {
    // data consumer
    // uses redux's useSelector hook to extract 'Hello World' from reducer'
    // The useSelector hook is used to `extract a piece of state` from the Redux store.
    // Here, it extracts the 'message' field from the 'hello' slice of the store.
    const message = useSelector((state) => state.hello.message);
    return <h1>{message}</h1>; // render <h1>Hello World</h1>
};

export default HelloReduxExampleComponent;

// use state as parameter
// The change to the code is necessary because the useSelector hook is passing
// the entire state object to the callback function, not just the hello slice of state.
// Therefore, we need to access the message property of the hello slice
// using state.hello.message instead of hello.message.
