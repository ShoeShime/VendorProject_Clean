import React from "react";
import styled from "styled-components";


const Info_Header = styled.div`
    color:#FF6D33;
    font-weight: bold;
    font-size: 15px;
`;

//The parameters 'children' is used to pass the appropriate content for the component.
	//'children' in this context is a string that represents users info

const InfoHeader = ({children}) =>{

	return(
		<Info_Header>{children}</Info_Header>
	);
}

export default InfoHeader;