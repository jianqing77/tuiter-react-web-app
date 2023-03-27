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
    dateOfBirth: '7/7/1997',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: currentProfile,
    reducers: {
        modifyProfile(state, action) {},
    },
});

export default profileSlice.reducer;
