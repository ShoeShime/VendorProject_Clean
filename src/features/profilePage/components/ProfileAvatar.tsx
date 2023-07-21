import React, {useState} from "react";
import styled from "styled-components";

import Avatar from "../../../components/Avatar";


//temp avatar pic that may need to be deleted and changed later
import A_Pic from "../../ChatPage/ChatDisplay/misc/Dog.jpg";

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


//In The return statement below for Profile_Image may need to be changed for backend database:
	//	src={profilePic} name={fName}
    

//May need to be included as a parameter for this file

const ProfileAvatar = () =>{
    const profileLink = "https://www.kindpng.com/picc/m/17-179199_chibi-christmas-anime-pinkhair-kawaii-anime-chibi-png.png";
    const [profilePic, setProfilePic] = useState(profileLink);

    const [fName, setFName] = useState("Thanh");

    const setProfilePicture = (pictureLink) => {
        setProfilePic(pictureLink);
      }

    const setFirstName = (firstName) => {
        setFName(firstName);
    }

	return(
		<Profile_Avatar>

			<Profile_Image src={profilePic} name={fName}/>
	
		</Profile_Avatar>
	);
}

export default ProfileAvatar;