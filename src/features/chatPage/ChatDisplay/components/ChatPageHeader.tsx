import React from "react";
import styled from "styled-components";


import TitleComponent from "./TitleComponent";
import UserInfoComponent from "./UserInfoComponent";
import SearchBarComponent from "./SearchBarComponent";
import NewMessageIconComponent from "./NewMessageIconComponent";


//Header, The Top of the Page
const MessageHeader = styled.header`
	background-color: #FFFFFF;

	display: flex;
	flex-direction: column;

	align-items: strech;
	justify-content: flex-end;

	height: 30%;
	max-height: 135px;

	padding: 0 10px;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

`;


//This component should include
	//A Title Component
	//A UserInfo Component
	//A SearchBar Component
	//New MessageIcon Component
const ChatPageHeader = () =>{

	//Include variables that would store the users information
		//Username
		//profilePic 


	return(
		<MessageHeader>

			<TitleComponent/>
			<UserInfoComponent/>
			<SearchBarComponent/>
			<NewMessageIconComponent/>

		</MessageHeader>
	);
}

export default ChatPageHeader;