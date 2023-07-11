import React, {useState} from "react";	
import styled from "styled-components";
import SendButton from "./SendButton";
import MessageInput from "./MessageInput";

const MessageContainer = styled.div`
	position: fixed;
	background-color: #B5B5B5;

	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 10px;
	box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);

	bottom: 0;
	width: 100%;
`;

const MessageForm = styled.form`
	background-color: #FFFFFF;
	width: 100%;

	display: flex;
	align-items: center;

	border-radius: 10px;
	padding: 10px;

	margin-right: 20px;
	gap: 20px;
`;

interface MessageProp{
	onMessageSubmit: (message: string) => void;
}

const Message = ({onMessageSubmit}: MessageProp) =>{
	const [messageInput, setMessageInput] = useState("");

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
		event.preventDefault();		//Prevents webpage from refreshing

		//This will allow user to display new messages 
		//if there exist text in the input box
		if(messageInput !== ""){
			//Sending a message
			onMessageSubmit(messageInput);

			//Reset input element to be empty
			setMessageInput("");
		}else{
			console.log("This message is null");
		}
	};

	return(
		<MessageContainer>
			<MessageForm>

				<MessageInput 
					id="MessageText"
					placeholder="Type your message here"
					type="text"
					value={messageInput}
					onChange={(event) => setMessageInput(event.target.value)}
				/>
					
				<SendButton 
					type="submit"
					onClick={handleSubmit}
				>
						Send
				</SendButton>

			</MessageForm>
		</MessageContainer>
	);
}

export default Message;