import React from "react";
import styled from "styled-components";

import ProfileHeader from "./ProfileContainer_components/ProfileHeader";
import ProfileAvatar from "./ProfileContainer_components/ProfileAvatar";
import UserProfileInfo from "./ProfileContainer_components/UserProfileInfo";
import EditButton from "./ProfileContainer_components/EditButton";
import PasswordButton from "./ProfileContainer_components/PasswordButton";
import {EditFormWithModal, ChangePasswordModalWithModal} from "./ProfileContainer_components/EditModal";
import ProfileOptions from "./ProfileContainer_components/ProfileOptions";
import LogoutModal from "./ProfileContainer_components/LogoutModal";


import ProfileType from "./ProfileContainer_components/ProfileType";


const Profile_Container = styled.div`
    height: 92vh;
    width: 100%;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 50px 35px 35px 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "h h h h"
        "a n n n"
        "a i i i"
        "a e e e"
        "a c c c"
        "o o o o"
        "m m m m"
        "p p p p"
        "t t t t";
`;


const ProfileContainer = ()=>{

	return(
		<Profile_Container>
			<ProfileHeader/>

			<ProfileAvatar/>

			<UserProfileInfo/>

			<EditButton/>

			<EditFormWithModal/>

            <PasswordButton/>

            <ChangePasswordModalWithModal/>

            <ProfileOptions/>

            <LogoutModal/>

            <div>{/*Email*/}</div>

            <div>{/*Phone*/}</div>

            <ProfileType/>
		</Profile_Container>
	);
}

export default ProfileContainer;