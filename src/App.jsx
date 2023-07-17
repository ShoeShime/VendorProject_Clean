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
import VendorDashboard from './features/vendordisplay/VendorDashboard'
import VendorRegister from './features/vendordisplay/components/VendorRegister'
import CustomerRegister from './features/vendordisplay/components/CustomerRegister'
import UseVendorData from "./features/vendordisplay/components/UseVendorData";



export const App = () => {
  
  console.log('app page loaded');

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
