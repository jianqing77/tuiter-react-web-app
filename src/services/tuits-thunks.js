import { createAsyncThunk } from '@reduxjs/toolkit';
import * as service from './tuits-service'; // import all exported functions as service

/**
 * createAsyncThunk function takes two arguments:
 * - a string that defines the name of the async thunk action
 * - an asynchronous function that is executed when the action is dispatched
 */

// create thunk for findTuits
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', //used by Redux to keep track of the action and update the state accordingly
    // service function. Returned data goes in redux action's payload
    // uses the await keyword to wait for the findTuits function from the imported tuits-service module to complete its execution
    async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk('tuits/deleteTuit', async (tuitId) => {
    await service.deleteTuit(tuitId); // service method
    return tuitId; // return tuit ID so we can remove tuit from reducer's store
});

export const createTuitThunk = createAsyncThunk('tuits/createTuit', async (tuit) => {
    const newTuit = await service.createTuit(tuit);
    return newTuit;
});

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) => await service.updateTuit(tuit) // sends updated tuit to server with service
);
