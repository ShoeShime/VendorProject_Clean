import React, {useState} from "react";
import styled from "styled-components";

import EditForm from "../../../../components/EditForm";
import ChangePasswordModal from "../../../../components/ChangePasswordModal";

import logoPicture from "../../../../MarysLogo.png";


const Edit_Modal = styled.div`
    position: fixed;
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-self: center;
    align-self: center;
    z-index: 1;
`;

//In The return statement below the 12 variables may need to be changed for backend database:
	//  
    //  

//May need to be included as a parameter for this file

//FIXME: setEditData function is not properly implemented error located or as something to do with the
//prop variable(?) or type(?)

//EditFormWithModal function
export const EditFormWithModal = ({isVendor, profilePic, 
    fName, lName, phone, storeName, logo, des, cat, openEdit, 
    setOpenEdit, setEditData}) =>{

    return(
        <Edit_Modal>
            <EditForm
                isVendor = {isVendor} 
                source = {profilePic} 
                fName = {fName} 
                lName = {lName} 
                phone = {phone} 
                storeName = {storeName} 
                logo = {logo} 
                description = {des} 
                categories = {cat} 
                open={openEdit} 
                setOpenEdit={setOpenEdit} 
                setEditData={setEditData}
            />
        </Edit_Modal>
    );
}


//ChangePasswordModalWithModal function
export const ChangePasswordModalWithModal = ({passwordModal, pass, setPasswordModal, setPasswordData}) =>{

    
    return(
        <Edit_Modal>
            <ChangePasswordModal
                open={passwordModal}
                password = {pass} 
                setPasswordModal={setPasswordModal} 
                setPasswordData={setPasswordData}
            />
        </Edit_Modal>
    );
}