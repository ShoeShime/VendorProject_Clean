import {useState} from "react";
import styled from "styled-components";


//global components ??
import Navbar from "../../components/Navbar";
//import Header from "../../components/Header";
import Modal from "../../components/Modal";
//import SignoutModal from "../../components/SignOutModal";
//import Avatar from "../../components/Avatar";
//import EditForm from "../../components/EditForm";
//import ChangePasswordModal from "../../components/ChangePasswordModal";


//This pages' components
import ProfileContainer from "./components/ProfileContainer";




const Profile = ({    }) =>{

    return(
        <div>
            <ProfileContainer/>

            <Navbar/>
        </div>
    );
};

export default Profile;

