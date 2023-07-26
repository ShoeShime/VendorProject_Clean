import React, {useState} from "react";
import styled from 'styled-components';
import ChatHeader from "./components/ChatHeaderRoom";
import MessageSender from "./components/MessageSender";

//Background
const M_body = styled.body`
	background-color: #d2d2d4;

	height: 100vh;
	text-align: center;
`;

export function ChatRoom(){

	return(
		<M_body>

			<ChatHeader/>

			<MessageSender/>
			
		</M_body>
	)
}

export default ChatRoom;