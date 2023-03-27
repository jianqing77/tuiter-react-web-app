import { createSlice } from '@reduxjs/toolkit';
import tuits from '../data/tuits.json';

// create a currentUser object as the currently logged in user
// Later this will come from users login in
const currentUser = {
    userName: 'NASA',
    handle: '@nasa',
    image: 'nasa.jpg',
};

// create a template tuit object with some default
// values and copy over the fields userName, handle and
// image from the currentUser
const templateTuit = {
    ...currentUser,
    topic: 'Space',
    time: '2h',
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
};

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        // reducer functions:
        likePostToggle(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id);
            tuit.liked = !tuit.liked;
            tuit.liked ? tuit.likes++ : tuit.likes--;
        },
        createTuit(state, action) {
            // uses the unshift method to add the new tuit at the beginning of the array.
            state.unshift({
                ...templateTuit,
                ...action.payload,
                _id: new Date().getTime(),
            });
        },
        deleteTuit(state, action) {
            const index = state.findIndex((tuit) => tuit._id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { likePostToggle, createTuit, deleteTuit } = tuitsSlice.actions;

export default tuitsSlice.reducer;
