import React from "react";
import styled from "styled-components";

import Header from "../../../../components/Header";

const Home_Page_Header = styled.div`
    grid-area: h;
`;


const HomePageHeader = ({logo, storeName}) =>{



	return(
		<Home_Page_Header>
			<Header src = {logo} username={storeName}/>
		</Home_Page_Header>
	);
}

export default HomePageHeader;