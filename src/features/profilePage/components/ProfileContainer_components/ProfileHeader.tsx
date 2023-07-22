import React from "react";
import styled from "styled-components";

import Header from "../../../../components/Header";


const Profile_Header = styled.div`
    grid-area: h;
`;


const ProfileHeader = ()=>{

	return(
		<Profile_Header>
			<Header src="https://www.kindpng.com/picc/m/108-1084597_real-estate-hd-png-download.png" username="Gumbly"/>
		</Profile_Header>
	);
}

export default ProfileHeader;