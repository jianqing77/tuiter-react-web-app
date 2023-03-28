import { createSlice } from '@reduxjs/toolkit';

const currentProfile = {
    firstName: 'Monica',
    lastName: 'Geller',
    handle: '@monicageller',
    profilePicture: 'monica.jpg',
    bannerPicture: 'background.jpg',
    bio: 'CS Graduate Student at Northeastern University. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1981',
    dateJoined: '4/2019',
    followingCount: 340,
    followersCount: 223,
    tuitsNum: 6114,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: currentProfile,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload.firstName;
        },
        updateLastName(state, action) {
            state.lastName = action.payload.lastName;
        },
        updateBio(state, action) {
            state.bio = action.payload.bio;
        },
        updateLocation(state, action) {
            state.location = action.payload.location;
        },
        updateWebsite(state, action) {
            state.website = action.payload.website;
        },
        updateDateOfBirth(state, action) {
            state.dateOfBirth = action.payload.dateOfBirth;
        },
    },
});

export const { updateFirstName, updateLastName, updateBio, updateLocation, updateWebsite, updateDateOfBirth } =
    profileSlice.actions;

export default profileSlice.reducer;
