import {useState} from "react";
import styled from "styled-components";

//Picture used for components: 
    //add more details about its use later
import logoPicture from "../../MarysLogo.png";
import samplePDF from "../../Marys-FoodTruck-Menu.pdf";

//global components ??
import Navbar from "../../components/Navbar";

//What is this imports purposes of?
import Modal from "../../components/Modal";


//This pages' components
import ProfileContainer from "./components/ProfileContainer";

const Profile = () =>{
    console.log("Loading Profile Page");

    const profileLink = "https://www.kindpng.com/picc/m/17-179199_chibi-christmas-anime-pinkhair-kawaii-anime-chibi-png.png";
    //const storeLogo = "https://www.kindpng.com/picc/m/27-273685_giant-singapore-food-stores-supermarket-giant-landover-giant.png";
    const storeLogo = logoPicture;

    // Basic information for both vendor & customer
    // Changable info
    const [profilePic, setProfilePic] = useState(profileLink);
    const [fName, setFName] = useState("Thanh");
    const [lName, setLName] = useState("Nguyen");
    const [phone, setPhone] = useState("949-558-4875");
    const [isActive, setIsActive] = useState(false); // if status is true, user is active, otherwise, user is inactive
    const [password, setPassword] = useState("Thanh_210299");


    // Unchangable info
    const userID = "@userID";
    const email = "test123@gmail.com";
    /* Profile Type
      (isVendor = true)  => user is Vendor 
      (isVendor = false) => user is Customer
    */
    const isVendor = true;

    const [menuFile, setMenuFile] = useState(samplePDF);
    const [storeName, setStoreName] = useState("Mary's URBAN Kitchen");
    const [des, setDes] = useState("Mary's Urban Kitchen Food Truck brings you comfort food with a twist.");
    const [cat, setCat] = useState("Taco, Ice cream, Churros, Soda, Coconut, Fruit cup");
    const [logo, setLogo] = useState(storeLogo);
    
    //Set functions: This boilerplate should be moved to a separate file
    const setProfilePicture = (pictureLink) => {
        setProfilePic(pictureLink);
    }
    
    const setFirstName = (firstName) => {
        setFName(firstName);
    }
    
    const setLastName = (lastName) => {
        setLName(lastName);
    }
    
    const setPhoneNumber = (phoneNumber) => {
        setPhone(phoneNumber);
    }
      
      //this funtion is used for the Vendor component and should be deleted and moved to its appropriate folder
      const setActive = (bool) => {
        setIsActive(bool);
      }
    
    const setPass = (pass) => {
        setPassword(pass);
    }
      
    const setMenu = (menu) => {
        setMenuFile(menu);
    }
    
    const setStore = (name) => {
        setStoreName(name);
    }
    
    const setDescription = (description) => {
        setDes(description);
    }
    
    const setCategories = (caterories) => {
        setCat(caterories);
    }
    
    const setStoreLogo = (logoPic) => {
        setLogo(logoPic);
    }

    return(
        <div>
            {/*23 parameters are the same as in the component*/}
            <ProfileContainer
                isVendor = {isVendor}
                userID = {userID}
                email = {email}
                profilePic = {profilePic}
                fName = {fName}
                lName = {lName}
                phone = {phone}
                pass = {password}
                setProfilePicture = {setProfilePicture}
                setFirstName = {setFirstName}
                setLastName = {setLastName}
                setPhoneNumber = {setPhoneNumber}
                setPass = {setPass}
                storeName = {storeName}
                logo = {logo}
                description = {des}
                categories = {cat}
                pdfFile = {menuFile}
                setDescription = {setDescription}
                setCategories = {setCategories}
                setStore = {setStore}
                setStoreLogo = {setStoreLogo}
                setMenu = {setMenu}
            />

            <Navbar/>
        </div>
    );
};

export default Profile;

