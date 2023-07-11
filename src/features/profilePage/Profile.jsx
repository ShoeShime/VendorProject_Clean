import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import SignOutModal from "../../components/SignOutModal";
import Avatar from "../../components/Avatar";
import EditForm from "../../components/EditForm";
import ChangePasswordModal from "../../components/ChangePasswordModal";
import { useState } from 'react';
import styled from 'styled-components';


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

const Profile_Header = styled.div`
    grid-area: h;
`;

const Profile_Avatar = styled.div`
    grid-area: a;
    border-radius: 50%;
    width: min(30vh, 30vw);
    height: min(30vh, 30vw);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    margin-left: 10px;
    background-color: #F3F2F2;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Profile_Image = styled(Avatar)`
    width: min(25vh, 25vw);
    height: min(25vh, 25vw);
`;

const Username = styled.div`
    grid-area: n;
    margin-right: 10px;
    justify-content: left;
    align-items: center;
    display: flex;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const User_ID = styled.div`
    grid-area: i;
    margin-right: 10px;
    justify-content: left;
    display: flex;
    font-size: 15px;
    font-style: italic;
    color: #7A7A7A;
`;

const Edit_Button = styled.div`
    grid-area: e;
    width: max-content;
    height: max-content;
    border-radius: 20px;
    font-size: 20px;
    align-content: center;
    background-color: #FF6D33;
    color: white;
    font-weight: bold;
    padding: 7px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const Password_Button = styled.div`
    grid-area: c;
    width: max-content;
    height: max-content;
    border-radius: 20px;
    font-size: 20px;
    align-content: center;
    background-color: #FF6D33;
    color: white;
    font-weight: bold;
    padding: 7px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    row-gap: 10px;
`;

const Profile_Options = styled.div`
    grid-area: o;
    background-color: #DADADA;
    color: white;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-weight: bold;

    .info_button_inactive,
    .logout_button_inactive{
        border-radius: 10px;
        width: 50%;
        padding: 10px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        align-self: center;
        cursor: pointer;
    }

    .info_button_active,
    .logout_button_active {
        border-radius: 10px;
        width: 50%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        align-self: center;
        background-color: #FF6D33;
        padding: 10px;
        cursor: pointer;
    }
`;

const LogOut_Modal = styled.div`
    position: fixed;
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-self: center;
    align-self: center;
    z-index: 1;
`;

const Email = styled.div`
    grid-area: m;
    background-color: #EEEDED;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
`;

const Phone = styled.div`
    grid-area: p;
    background-color: #EEEDED;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
`;

const Profile_Type = styled.div`
    grid-area: t;
    background-color: #EEEDED;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
`;

const Info_Header = styled.div`
    color:#FF6D33;
    font-weight: bold;
    font-size: 15px;
`;

const Edit_Modal = styled.div`
    position: fixed;
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-self: center;
    align-self: center;
    z-index: 1;
`;

const Profile = ({isVendor, userID, email, profilePic, fName, lName, phone, pass, storeName, logo, description, categories, ...props}) => {
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
            props.setPass(password);
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
                props.setMenu(menuFile);
            }
            props.setStore(store);
            props.setDescription(des);
            props.setProfilePicture(src);
            props.setFirstName(firstName);
            props.setLastName(lastName);
            props.setPhoneNumber(phoneNumber);
            props.setStoreLogo(logoPic);
            props.setCategories(cat);
        }
    }

    return (
        <div>
            <Profile_Container>
                <Profile_Header>
                    <Header src = "https://www.kindpng.com/picc/m/108-1084597_real-estate-hd-png-download.png" username="Gumbly"></Header>
                </Profile_Header>
                <Profile_Avatar>
                    <Profile_Image src={profilePic} name={fName}/>
                </Profile_Avatar>
                <Username>{fName}, {lName}</Username>
                <User_ID>{userID}</User_ID>
                <Edit_Button onClick={()=>setOpenEdit(true)}>
                    Edit Profile
                </Edit_Button>
                <Edit_Modal>
                    <EditForm isVendor = {isVendor} source = {profilePic} fName = {fName} lName = {lName} phone = {phone} storeName = {storeName} logo = {logo} description = {description} categories = {categories} open={openEdit} setOpenEdit={setOpenEdit} setEditData={setEditData}/>
                </Edit_Modal>

                <Password_Button onClick={()=>setPasswordModal(true)}>
                    Change Password
                </Password_Button>
                <Edit_Modal>
                    <ChangePasswordModal open={passwordModal} password = {pass} setPasswordModal={setPasswordModal} setPasswordData={setPasswordData}/>
                </Edit_Modal>

                <Profile_Options>
                    <div 
                        onClick={() => setOption(false)}
                        className={`${logout ? "info_button_inactive" : "info_button_active"}`}
                    >
                        General
                    </div>
                    <div
                        onClick={() => setOption(true)}
                        className={`${logout ? "logout_button_active" : "logout_button_inactive"}`}
                    >
                        Sign Out
                    </div>
                </Profile_Options>
                <LogOut_Modal>
                    <SignOutModal content="You are going to log out from your account." open={openModal} setOpenModal={setOpenModal} setData={setData}/>
                </LogOut_Modal>
                <Email>
                    <Info_Header>Email:</Info_Header>
                    {email}
                </Email>
                <Phone>
                    <Info_Header>Phone Number:</Info_Header>
                    {phone}
                </Phone>
                <Profile_Type>
                    <Info_Header>Profile Type:</Info_Header>
                    {isVendor ? 'Vendor' : 'Customer'}
                </Profile_Type>
                </Profile_Container>
                <Navbar></Navbar>
        </div>
    )
};
export default Profile;