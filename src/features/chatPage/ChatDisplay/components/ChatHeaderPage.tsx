import React from "react";
import styled from "styled-components";


import SearchMessage from "./SearchMessage";

//Assets or Images
import GoofyDog from "../misc/Dog.jpg";


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

const HeaderContainer = styled.div`

	display: flex;

	align-items: center;
	justify-content: space-between;

	height: 50%;
`;

const MessageTitle = styled.p`

	color: #333333;

	font-size: 3em;
	font-weight: bold;

`;

const UserIcon = styled.img`

	height: 4em;
	width: 4em;

	border-radius: 50%;
`;

const ChatHeaderPage = () =>{

	return(
		<MessageHeader>

			<HeaderContainer>
				<MessageTitle className="Title">Message</MessageTitle>
				<UserIcon className="User-Image" src={GoofyDog} alt="User icon"/>
			</HeaderContainer>

			<SearchMessage/>

		</MessageHeader>
	);
}

export default ChatHeaderPage;