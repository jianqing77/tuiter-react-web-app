import { createSlice } from '@reduxjs/toolkit';
import tuits from '../data/tuits.json';
import {
    findTuitsThunk,
    deleteTuitThunk,
    createTuitThunk,
    updateTuitThunk,
} from '../../services/tuits-thunks';

// initial state has no tuits
// loading flag to display spinner
const initialState = {
    tuits: [],
    loading: false,
};

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = payload;
        },
        // if request times out, or responds with error
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        // payload from action contains tuit ID to remove
        [deleteTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits = state.tuits.filter((t) => t._id !== payload);
        },
        // when server responds,  payload contains new tuit
        [createTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.tuits.push(payload);
        },
        [updateTuitThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx],
                ...payload,
            };
        },
    },
    reducers: {},
});

export const { likePostToggle, createTuit, deleteTuit } = tuitsSlice.actions;

export default tuitsSlice.reducer;
