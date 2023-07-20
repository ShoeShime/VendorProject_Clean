import React from "react";
import styled from "styled-components";

import EditForm from "../../../components/EditForm";
import ChangePasswordModal from "../../../components/ChangePasswordModal";

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

/*
    <Edit_Modal>
        <EditForm isVendor = {isVendor} source = {profilePic} fName = {fName} lName = {lName} phone = {phone} storeName = {storeName} logo = {logo} description = {description} categories = {categories} open={openEdit} setOpenEdit={setOpenEdit} setEditData={setEditData}/>
    </Edit_Modal>
*/

/*
   <Edit_Modal>
        <ChangePasswordModal open={passwordModal} password = {pass} setPasswordModal={setPasswordModal} setPasswordData={setPasswordData}/>
    </Edit_Modal>
*/

//May need to be included as a parameter for this file

/*
const EditModal = () =>{
    var isVendor = "";
    var profilePic = "";
    var fName = "";
    var lName = "";
    var phone = "";
    var storeName = "";
    var logo = "";
    var description = "";
    var categories = "";
    var openEdit = ""
    var setOpenEdit = "";
    var setEditData = "";

	return(
        <Edit_Modal>
            <EditForm isVendor = {isVendor} 
            source = {profilePic} 
            fName = {fName} 
            lName = {lName} 
            phone = {phone} 
            storeName = {storeName} 
            logo = {logo} 
            description = {description} 
            categories = {categories} 
            open={openEdit} 
            setOpenEdit={setOpenEdit} 
            setEditData={setEditData}
            />
        </Edit_Modal>
	);
}
*/


//EditFormWithModal function
export const EditFormWithModal = () =>{
    var isVendor = "";
    var profilePic = "";
    var fName = "";
    var lName = "";
    var phone = "";
    var storeName = "";
    var logo = "";
    var description = "";
    var categories = "";
    var openEdit = ""
    var setOpenEdit = "";
    var setEditData = "";


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
                description = {description} 
                categories = {categories} 
                open={openEdit} 
                setOpenEdit={setOpenEdit} 
                setEditData={setEditData}
            />
        </Edit_Modal>
    );
}

//ChangePasswordModalWithModal function
export const ChangePasswordModalWithModal = () =>{
    var passwordModal = "";
    var pass = "";
    var setPasswordModal = "";
    var setPasswordData = "";

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