import React from "react";
import styled from "styled-components";


const Description_Header = styled.div`
    grid-area: dh;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;


const DesriptionHeader = () =>{

	return(
		<Description_Header>Description</Description_Header>
	);
}

export default DesriptionHeader;