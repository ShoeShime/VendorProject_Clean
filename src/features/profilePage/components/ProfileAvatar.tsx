import React from "react";
import styled from "styled-components";

import Avatar from "../../../components/Avatar";


const Profile_Avatar = styled.div`
    grid-area: a;
    border-radius: 50%;
    width: min(30vh, 30vw);
    height: min(30vh, 30vw);
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    margin-left: 10px;
    background-color: #F3F2F2;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const Profile_Image = styled(Avatar)`
    width: min(25vh, 25vw);
    height: min(25vh, 25vw);
`;


//In The return statement below for Profile_Image include the line:
	//	src={profilePic} name={fName}

//May need to be included as a parameter for this file

const ProfileAvatar = () =>{

	return(
		<Profile_Avatar>

			<Profile_Image/>
	
		</Profile_Avatar>
	);
}

export default ProfileAvatar;