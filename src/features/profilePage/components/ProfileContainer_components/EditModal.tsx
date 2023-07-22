import React, {useState} from "react";
import styled from "styled-components";

import EditForm from "../../../../components/EditForm";
import ChangePasswordModal from "../../../../components/ChangePasswordModal";

import logoPicture from "../../../MarysLogo.png";


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
export const EditFormWithModal = () =>{
    const profileLink = "https://www.kindpng.com/picc/m/17-179199_chibi-christmas-anime-pinkhair-kawaii-anime-chibi-png.png";
    const storeLogo = logoPicture;

    const isVendor = true;
    const [profilePic, setProfilePic] = useState(profileLink);
    const [fName, setFName] = useState("Thanh");
    const [lName, setLName] = useState("Nguyen");
    const [phone, setPhone] = useState("949-558-4875");
    const [storeName, setStoreName] = useState("Mary's URBAN Kitchen");
    const [logo, setLogo] = useState(storeLogo);
    const [des, setDes] = useState("Mary's Urban Kitchen Food Truck brings you comfort food with a twist.");
    const [cat, setCat] = useState("Taco, Ice cream, Churros, Soda, Coconut, Fruit cup");
    const [openEdit, setOpenEdit] = useState(false);
    //var setOpenEdit = "";

    //The variable below is suppose to be a function
    const setEditData = "";

 

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