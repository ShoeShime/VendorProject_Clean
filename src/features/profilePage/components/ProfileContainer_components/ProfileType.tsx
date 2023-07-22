import React from "react";
import styled from "styled-components";

import InfoHeader from "./InfoHeader";

const Profile_Type = styled.div`
    grid-area: t;
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

//Place import string name in the InfoHeader element
    //StringName: ProfileType:
const ProfileType = () =>{
    const isVendor = true;

    
	return(
		<Profile_Type>
            <InfoHeader/>

            {isVendor ? 'Vendor' : 'Customer'}
        </Profile_Type>
	);
}

export default ProfileType;