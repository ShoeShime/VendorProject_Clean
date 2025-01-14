import React, {useState} from "react";
import styled from "styled-components";

import InfoHeader from "./InfoHeader";


const Email = styled.div`
    grid-area: m;
    background-color: #EEEDED;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
`;

//
//	{email, phone}

//Place the string name for the 2 InfoHeaders element
	//stringname: Email:
	//stringname: Phone Number:

const UserProfileEmailInfo = ({email}) =>{


	return(
		<Email>
			<InfoHeader>Email:</InfoHeader>
			{email}
		</Email>
	);
}

export default UserProfileEmailInfo;