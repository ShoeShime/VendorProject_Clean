import React from "react";
import styled from "styled-components";


const Info_Header = styled.div`
    color:#FF6D33;
    font-weight: bold;
    font-size: 15px;
`;


const InfoHeader = ({children}) =>{

	return(
		<Info_Header>{children}</Info_Header>
	);
}

export default InfoHeader;