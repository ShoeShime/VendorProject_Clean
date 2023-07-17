import {useState} from "react";

import samplePDF from "../../../Marys-FoodTruck-Menu.pdf";
import logoPicture from "../../../MarysLogo.png";


export const useVendorData = () =>{
	console.log("initalizing or uploading or 'whatever adjective im suppose to say' vendor information");

	const profileLink = "https://www.kindpng.com/picc/m/17-179199_chibi-christmas-anime-pinkhair-kawaii-anime-chibi-png.png";

	const storeLogo = logoPicture;


	//Basic information for both vendor & customer
	//changeable info
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

	// Vendor extra information
  const [menuFile, setMenuFile] = useState(samplePDF);
  const [storeName, setStoreName] = useState("Mary's URBAN Kitchen");
  const [des, setDes] = useState("Mary's Urban Kitchen Food Truck brings you comfort food with a twist.");
  const [cat, setCat] = useState("Taco, Ice cream, Churros, Soda, Coconut, Fruit cup");
  const [logo, setLogo] = useState(storeLogo);


	//Set Functions
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

	return{
		

	};
};