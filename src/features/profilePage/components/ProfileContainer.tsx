import React, {useState} from "react";
import styled from "styled-components";

import ProfileHeader from "./ProfileContainer_components/ProfileHeader";
import ProfileAvatar from "./ProfileContainer_components/ProfileAvatar";
import UserProfileInfo from "./ProfileContainer_components/UserProfileInfo";
import EditButton from "./ProfileContainer_components/EditButton";
import PasswordButton from "./ProfileContainer_components/PasswordButton";
import {EditFormWithModal, ChangePasswordModalWithModal} from "./ProfileContainer_components/EditModal";
import ProfileOptions from "./ProfileContainer_components/ProfileOptions";
import LogoutModal from "./ProfileContainer_components/LogoutModal";
import UserProfileEmailInfo from "./ProfileContainer_components/UserProfileEmailInfo";
import UserProfilePhoneInfo from "./ProfileContainer_components/UserProfilePhoneInfo";
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


const ProfileContainer = (
        {isVendor, userID, email, 
        profilePic, fName, lName, phone, pass, 
        setProfilePicture, setFirstName, setLastName, setPhoneNumber, setPass,
        storeName, logo, description, categories, pdfFile,
        setDescription, setCategories, setStore, setStoreLogo, setMenu}
    )=>{

    const [logout, setLogout] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [chooseData, setChooseData] = useState("");
    
    const [passwordModal, setPasswordModal] = useState(false);
    const [passwordModalChoice, setPasswordModalChoice] = useState(null);

    const setData = (data) => {
        setChooseData(data);
    }

    const setPasswordData = (data, password) => {
        setPasswordModalChoice(data);
        if (data === 'Continue'){
            setPass(password);
        }
    }

    const setOption = (bool) => {
        setLogout(bool);
        if (!logout){
            setOpenModal(true);
        }
    }

    const setEditData = (data, src, firstName, lastName, phoneNumber, menuFile, store, logoPic, des, cat) => {
        if (data === 'Continue'){
            if (menuFile) {
                setMenu(menuFile);
            }
            setStore(store);
            setDescription(des);
            setProfilePicture(src);
            setFirstName(firstName);
            setLastName(lastName);
            setPhoneNumber(phoneNumber);
            setStoreLogo(logoPic);
            setCategories(cat);
        }
    }





	return(
		<Profile_Container>
			<ProfileHeader/>

            {/*2 props taken as paramters*/}
			<ProfileAvatar 
                profilePic = {profilePic}
                fName = {fName}
            />

            {/*3 props taken as paramters*/}
			<UserProfileInfo 
                fName = {fName}
                lName = {lName}
                userID = {userID}
            />

            {/*0 props taken as paramters*/}
            {/*as a function or unknown variable in the component???*/}
			<EditButton
                setOpenEdit={setOpenEdit}
            />

            {/*12 props taken as paramters*/}
			<EditFormWithModal
                isVendor = {isVendor}
                profilePic = {profilePic}
                fName = {fName}
                lName = {lName}
                phone = {phone}
                storeName = {storeName}
                logo = {logo}
                des = {description}
                cat = {categories}
                openEdit = {openEdit}
                setOpenEdit = {setOpenEdit}
                setEditData = {setEditData}
            />

            {/*2 props taken as paramters*/}
            <PasswordButton
                setPasswordModal = {setPasswordModal}
                setPasswordModalChoice = {setPasswordModalChoice}
            />

            {/*4 props taken as paramters*/}
            <ChangePasswordModalWithModal
                passwordModal = {passwordModal}
                pass = {pass}
                setPasswordModal = {setPasswordModal}
                setPasswordData = {setPasswordData}
            />

            {/*0 props taken as paramters*/}
            <ProfileOptions
                setLogout = {setLogout}
                setOpenModal = {setOpenModal}
                logout = {logout}
            />

            {/*4 props taken as paramters*/}
            <LogoutModal
                openModal = {openModal}
                setOpenModal = {setOpenModal}
                setChooseData = {setChooseData}
            />

            {/*1 props taken as paramters*/}
            <UserProfileEmailInfo
                email = {email}
            />
            
            {/*1 props taken as paramters*/}
            <UserProfilePhoneInfo
                phone = {phone}
            />

            {/*1 props taken as paramters*/}
            <ProfileType
                isVendor = {isVendor}
            />
		</Profile_Container>
	);
}

export default ProfileContainer;