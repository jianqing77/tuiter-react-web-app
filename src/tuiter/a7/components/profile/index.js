import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileContentComponent from './profile-content';
import EditProfileComponent from './edit-profile';

const ProfileComponent = () => {
    const [isEditingProfile, setIsEditingProfile] = useState(false);

    return (
        <>
            {isEditingProfile ? (
                <EditProfileComponent setIsEditingProfile={setIsEditingProfile} />
            ) : (
                <ProfileContentComponent setIsEditingProfile={setIsEditingProfile} />
            )}
        </>
    );
};

export default ProfileComponent;
