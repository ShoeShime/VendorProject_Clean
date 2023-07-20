import React from "react";
import styled from "styled-components";

import ProfileHeader from "./ProfileHeader";
import ProfileAvatar from "./ProfileAvatar";
import UserProfileInfo from "./UserProfileInfo";
import EditButton from "./EditButton";
import PasswordButton from "./PasswordButton";
import {EditFormWithModal, ChangePasswordModalWithModal} from "./EditModal";


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

            <div>{/*Profile_Options*/}</div>

            <div>{/*Logout_Modal*/}</div>

            <div>{/*Email*/}</div>

            <div>{/*Phone*/}</div>

            <div>{/*ProfileType*/}</div>

		</Profile_Container>
	);
}

export default ProfileContainer;