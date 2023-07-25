import React from "react";
import styled from "styled-components";


import HomePageHeader from "./VendorDashboardWrapper_components/HomePageHeader";
import LocationDisplay from "./VendorDashboardWrapper_components/LocationDisplay";
import VendorToggleSwitch from "./VendorDashboardWrapper_components/VendorToggleSwitch";
import DescriptionHeader from "./VendorDashboardWrapper_components/DescriptionHeader";
import CategoriesHeader from "./VendorDashboardWrapper_components/CategoriesHeader";
import VendorDescription from "./VendorDashboardWrapper_components/VendorDescription";
import VendorCategories from "./VendorDashboardWrapper_components/VendorCategories";
import MenuHeader from "./VendorDashboardWrapper_components/MenuHeader";
import VendorMenu from "./VendorDashboardWrapper_components/VendorMenu";

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


const HomeContainer = ({isActive, storeName, logo, description, categories, pdfFile, setActive}) => {


	return(
		<Home_Container>
			<HomePageHeader
				logo = {logo}
				storeName = {storeName}
			/>

			<LocationDisplay/>

			<VendorToggleSwitch
				isActive = {isActive}
				setActive = {setActive}
			/>

			<DescriptionHeader/>

			<CategoriesHeader/>

			<VendorDescription
				description = {description}
			/>

			<VendorCategories
				categories = {categories}
			/>

			<MenuHeader/>

			<VendorMenu
				pdfFile = {pdfFile}
			/>
		</Home_Container>
	);
}

export default HomeContainer;