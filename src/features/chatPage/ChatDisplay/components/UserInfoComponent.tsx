import React from "react";
import styled from "styled-components";


const UserInfoWrapper = styled.div`

	display: flex;

	align-items: center;
`;

const Pfp = styled.img`

	width: 50px;
	height: 50px;

	border-radius: 50%;

`;

const UserName = styled.p`

	margin-left: 10px;
`;


const UserInfoComponent = ({username, profilepicture}) =>{

	//Create a User Info Wrapper to edit the username and profile picture properly
	return(
		<UserInfoWrapper>
			<Pfp 
				className="User-image" 
				src={profilepicture} 
				alt="User icon" 
			/>
			<UserName>{username}</UserName>
		</UserInfoWrapper>
	);
}

export default UserInfoComponent;