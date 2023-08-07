import React from "react";
import styled from "styled-components";


const ConversationWrapper = styled.div`

	display: flex;
	align-items: center;

	padding: 10px;
	border-radius: 25%;

`;

const Avatar = styled.img`

	width: 50px;
	height: 50px;
	border-radius: 50%;

	margin-right: 10px;

`;

const MessageInfo = styled.div`

  display: flex;
	align-items: center;
	
	justify-content: space-between;

	flex: 1;

`;

const MessageContext = styled.div`

	display: flex;
	flex-direction: column;

`;

const AvatarName = styled.span`

	font-weight: bold;

`;

const ConvoText = styled.span`

	margin-left: 10px;

`;

const IsSeen = styled.div`
	background-color: blue;

	width: 10px;
	height: 10px;

	border-radius: 50%;

	margin-right: 5px;
`;

//Later replace (map) as it should be taken from the database 
	//Avatar Profile Picture
	//AvatarName
	//ConvoText
	//IsSeen

const Conversation = () =>{


	return(
		<ConversationWrapper>
			<Avatar/>
			<MessageInfo>
				<MessageContext>
					<AvatarName>Name Here </AvatarName>
					<ConvoText>This is a message that I am sending</ConvoText>
				</MessageContext>

				<IsSeen/>
			</MessageInfo>
		</ConversationWrapper>
	);
}

export default Conversation;