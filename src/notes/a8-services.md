**BEFORE**:
Previous implementations used `reducer functions` to update the state of the tuits array by adding new tuits to the state, deleting tuits, and modifying tuits in a redux store.
The reducers we've already implemented that create, delete, and update tuits, are all `synchronous`, manipulating data `local to the React.js` application,

**CHANGE**:
We need to replace the implementation with the `HTTP services` we implemented in the `Node.js server` in the previous section.
we need to instead `interact asynchronously with an HTTP server`, while `still maintaining a state with Redux`.

The Redux `createAsyncThunk` function can wrap an asynchronous HTTP function so that it can interact with a Redux reducer to store data from a remote server into a local redux store.

-   Axios is a JavaScript library that allows you to make HTTP requests from your React application to a server.
-   It simplifies the process of sending and receiving data from a server and provides a promise-based interface for handling the responses.
-   You can use Axios to make GET, POST, PUT, DELETE, and other types of requests to an API.

The code provided shows a web application architecture that uses JavaScript on both the client-side and server-side, as well as a state management library called Redux.

The **tuits-service.js** module

-   exports functions named findTuits, which **sends an HTTP GET request to a server API endpoint** and **returns a JSON array of "tuits"** (a made-up term).
-   This module depends on the axios library to perform the HTTP request.

The **tuits-thunk.js** module exports a createAsyncThunk function that

-   defines an asynchronous action creator for the tuits/findTuits action.
-   This action creator uses the functions from the tuits-service.js module to fetch the "tuits" data from the server API endpoint.

Finally, the **tuits-controller** module defines a function named findTuits that returns the res JSON object. This controller code is not directly related to the other modules shown, but it could be part of a larger web application framework that uses these modules.

In summary, the tuits-service.js module provides a function for fetching data from a server API endpoint, the tuits-thunk.js module defines an asynchronous action creator that uses this service function to fetch the data, and the tuits-controller module defines a controller function that could be used in a web application framework to handle incoming HTTP requests for the "tuits" resource.
