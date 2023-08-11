import React from "react";
import styled from "styled-components";


const MessageContainer = styled.div`

	display: flex;

	align-items: center;
	padding: 10px;

	border-top: 1px solid #CCCCCC;

`;



const MessageInputField = styled.input`

	flex: 1;

	font-size: 16px;

	border: none;
	border-radius: 5px;
	outline: none;
	
	padding: 5px;

`;

const SendButton = styled.button`
	cursor: pointer;
	background-color: #007bFF;
	color: #FFFFFF;

	font-size: 16px;

	border: none;
	border-radius: 5px;


	padding: 8px 16px;

	margin-left: 10px;
`;

//For now, This MessageInput component only supports sending 'string' messages
	//FIXME: Add a custom component that allows user to send 
			//pictures
			//hearts
			//or emojis
const MessageInput = () =>{


	return(
		<>
		<MessageContainer>
			<MessageInputField
				placeholder="Type your message here..."
			/>

			<SendButton>
				Send
			</SendButton>

		</MessageContainer>
		</>
	);
}


export default MessageInput;