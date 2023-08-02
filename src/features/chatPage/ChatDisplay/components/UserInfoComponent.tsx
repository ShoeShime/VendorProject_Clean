import React from "react";
import styled from "styled-components";


//Assets or Images
import GoofyDog from "../misc/Dog.jpg";


//start styled components here:
const Pfp = styled.img`

	width: 50px;
	height: 50px;

	border-radius: 50%;

`;

const UserName = styled.p`


`;


const UserInfoComponent = () =>{
	//Users Profile Picture would be taken from the database
		//This is only a temp profile picture
	const profilepicture = GoofyDog;

	return(
		<>
			<Pfp ClassName="User-image" src={profilepicture} alt="User icon" />
			<UserName/>
		</>
	);
}

export default UserInfoComponent;