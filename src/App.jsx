// @ts-nocheck
import './App.css'
import { useState} from 'react';
import { LandingPage } from './features/landingPage/components/LandingPage'
import { Register } from './features/registerPage/components/Register'
import { CallbackPage } from './features/misc/CallbackPage'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './lib/ProtectedRoute'
import ChatPage from './features/ChatPage/ChatDisplay/components/ChatPage'
import ChatRoom from './features/ChatPage/ChatRoom/components/ChatRoom'
import MapPage from './features/mapPage/MapPage';
import Profile from './features/profilePage/Profile';
import CustomerDashboard from './features/customerdisplay/components/CustomerDashboard'
import VendorDashboard from './features/vendordisplay/components/VendorDashboard'
import VendorRegister from './features/vendordisplay/components/VendorRegister'
import CustomerRegister from './features/vendordisplay/components/CustomerRegister'

import samplePDF from "./Marys-FoodTruck-Menu.pdf";
import logoPicture from "./MarysLogo.png";

export const App = () => {
  
  console.log('app page loaded');
  
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

  // Vendor extra information
  const [menuFile, setMenuFile] = useState(samplePDF);
  const [storeName, setStoreName] = useState("Mary's URBAN Kitchen");
  const [des, setDes] = useState("Mary's Urban Kitchen Food Truck brings you comfort food with a twist.");
  const [cat, setCat] = useState("Taco, Ice cream, Churros, Soda, Coconut, Fruit cup");
  const [logo, setLogo] = useState(storeLogo);

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

/*connects a 'string' in my address bar to a component*/
  return (
    <Routes>
      <Route path='/index.html' element={<LandingPage/>} />
      <Route path='/callback' element={<ProtectedRoute component={CallbackPage} /> } />
      <Route path='/customer' element={<ProtectedRoute component={CustomerDashboard} /> } />
      <Route path='/chat' element={<ChatPage/>}/>
      <Route path='/chatRoom' element={<ChatRoom/>}/>
      <Route path='/map' element={<MapPage/>}/>
      <Route path='/profile' element={<Profile 
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
          pdfFile={menuFile} 
          setDescription = {setDescription} 
          setCategories = {setCategories}
          setStore = {setStore} 
          setStoreLogo = {setStoreLogo} 
          setMenu={setMenu} />}
        />
      <Route path='/vendor' element={<VendorDashboard 
          isActive = {isActive}
          storeName = {storeName} 
          logo = {logo}
          description = {des} 
          categories = {cat}
          pdfFile={menuFile} 
          setActive = {setActive} />}
        />
      <Route path='/register' element={<ProtectedRoute component={Register}/>}/>
      {/*connect new route */}
      <Route path='/register/vendor' element={<ProtectedRoute component={VendorRegister}/>}/>
      <Route path='/register/customer' element={<ProtectedRoute component={CustomerRegister}/>}/>
      <Route path='/register/:userSub' element={<ProtectedRoute component={Register}/>}/>

    </Routes>
  )
}
