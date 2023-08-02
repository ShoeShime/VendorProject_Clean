import React from "react";
import styled from "styled-components";


import TitleComponent from "./TitleComponent";
import UserInfoComponent from "./UserInfoComponent";
import NewMessageIconComponent from "./NewMessageIconComponent";
import SearchBarComponent from "./SearchBarComponent";

//Assets or Images
import GoofyDog from "../misc/Dog.jpg";


//Header, The Top of the Page
const MessageHeader = styled.header`
	background-color: #FFFFFF;

	display: flex;
	flex-direction: column;

	align-items: stretch;
	justify-content: space-between;

	height: 30%;
	max-height: 135px;

	padding: 0 10px;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

`;

const HeaderContent = styled.div`


  display: flex;

	align-items: center;
	justify-content: space-between;

`;


//This component should include
	//A Title Component
	//A UserInfo Component
	//A SearchBar Component
	//New MessageIcon Component
const ChatPageHeader = () =>{

		const username = "John Doe";
		const profilePic = GoofyDog;

	return(
		<MessageHeader>
			
			<HeaderContent>
				<TitleComponent/>
				<UserInfoComponent
          username = {username}		
					profilepicture = {profilePic}
				/>
				<NewMessageIconComponent/>
			</HeaderContent>

			<SearchBarComponent/>
		</MessageHeader>
	);
}

export default ChatPageHeader;