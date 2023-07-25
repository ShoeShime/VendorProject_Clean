import React from "react";
import styled from "styled-components";


import PDF from "../../../../components/PDF";


const Menu = styled.div`
    grid-area: m;
    align-items: center;
    justify-content: center;
`;


const VendorMenu = ({pdfFile}) =>{

	return(
		<Menu>
			<PDF pdf = {pdfFile}/>
		</Menu>
	);
}

export default VendorMenu;