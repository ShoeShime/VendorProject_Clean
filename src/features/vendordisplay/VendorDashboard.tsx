import React from 'react'

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import LocationBox from "../../components/LocationBox";
import ToggleSwitch from "../../components/ToggleSwitch";
import PDF from "../../components/PDF";

import styled from 'styled-components';

const Home_Container = styled.div`
    height:  91vh;
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 50px 22px 40px 22px 100px 22px full;
    grid-template-areas:
        "h h"
        "l l"
        "t t"
        "dh ch"
        "d c"
        "mh mh"
        "m m";
`;

const Home_Page_Header = styled.div`
    grid-area: h;
`;

const Location_Box = styled.div`
    grid-area: l;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Toggle_Switch = styled.div`
    grid-area: t;
`;

const Description_Header = styled.div`
    grid-area: dh;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Categories_Header = styled.div`
    grid-area: ch;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Description = styled.div`
    grid-area: d;
    background-color: #F3F2F2;
    margin-left: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
`;

const Categories = styled.div`
    grid-area: c;
    background-color: #F3F2F2;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
`;

const Menu_Header = styled.div`
    grid-area: mh;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Menu = styled.div`
    grid-area: m;
    align-items: center;
    justify-content: center;
`;

//placeholder for Vendor dashboard view
//this is the first thing the Vendor will see after they log in to the app
const VendorDashboard = ({isActive, storeName, logo, description, categories, ...props}) => {
    
    const {pdfFile} = props;

    return (
        <div>
            <Home_Container>
                <Home_Page_Header>
                    <Header src = {logo} username={storeName}></Header>
                </Home_Page_Header>
                <Location_Box>
                    <LocationBox/>
                </Location_Box>
                <Toggle_Switch>
                    <ToggleSwitch 
                        toggled = {isActive}
                        setActive = {props.setActive}
                    >
                    </ToggleSwitch>
                </Toggle_Switch>
                <Description_Header>Description</Description_Header>
                <Categories_Header>Categories</Categories_Header>
                <Description>{description}</Description>
                <Categories>{categories}</Categories>
                <Menu_Header>Menu</Menu_Header>
                <Menu>
                    <PDF pdf={pdfFile}/>
                </Menu>
                </Home_Container>
            
            <Navbar></Navbar>
        </div>
    )
}

export default VendorDashboard