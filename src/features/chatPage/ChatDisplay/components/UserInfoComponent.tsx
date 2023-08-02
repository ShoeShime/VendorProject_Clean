import React from "react";
import styled from "styled-components";


//start styled components here:
const Pfp = styled.img`

	width: 50px;
	height: 50px;

	border-radius: 50%;

`;

const UserName = styled.p`


`;


const UserInfoComponent = ({username, profilepicture}) =>{

	//Create a User Info Wrapper to edit the username and profile picture properly
	return(
		<>
      <UserName>{username}</UserName>
			<Pfp 
				className="User-image" 
				src={profilepicture} 
				alt="User icon" />
		</>
	);
}

export default UserInfoComponent;