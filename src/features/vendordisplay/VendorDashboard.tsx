import React, {useState} from "react";
import styled from "styled-components";

//Picture used for components: 
    //add more details about its use later
import logoPicture from "../../MarysLogo.png";
import samplePDF from "../../Marys-FoodTruck-Menu.pdf";

//global components ??
import Navbar from "../../components/Navbar";


//This pages' components
import HomeContainer from "./components/HomeContainer";



const VendorDashboard = () => {
    const storeLogo = logoPicture;

    const [isActive, setIsActive] = useState(false); // if status is true, user is active, otherwise, user is inactive
    const [storeName, setStoreName] = useState("Mary's URBAN Kitchen");
    const [logo, setLogo] = useState(storeLogo);
    const [des, setDes] = useState("Mary's Urban Kitchen Food Truck brings you comfort food with a twist.");
    const [cat, setCat] = useState("Taco, Ice cream, Churros, Soda, Coconut, Fruit cup");
    const [menuFile, setMenuFile] = useState(samplePDF);


    const setActive = (bool) => {
        setIsActive(bool);
    }

    return(
        <div>
            <HomeContainer
                isActive = {isActive}
                storeName = {storeName} 
                logo = {logo}
                description = {des}
                categories = {cat}
                pdfFile = {menuFile}
                setActive = {setActive}
            />

            <Navbar/>
        </div>
    );
}

export default VendorDashboard;