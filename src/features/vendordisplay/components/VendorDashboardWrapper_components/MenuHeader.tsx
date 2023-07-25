import React from "react";
import styled from "styled-components";


const Menu_Header = styled.div`
    grid-area: mh;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const MenuHeader = () =>{

	return(
		<Menu_Header>Menu</Menu_Header>
	);
}

export default MenuHeader;