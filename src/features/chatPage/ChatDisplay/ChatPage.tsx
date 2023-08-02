import React from "react";
import styled from "styled-components";


import ChatPageHeader from "./components/ChatPageHeader";
import MessageBox from "./components/MessageBox";

//Global components
import Navbar from "../../../components/Navbar";


//Background
const ChatPageBody = styled.body`
	position: fixed;
	background-color: #FFFFFF;


	height: 100%;
	width: 100%;
`;

export function ChatPage(){


	return(
		<ChatPageBody>
			<ChatPageHeader/>

			<MessageBox/>
			
			<Navbar/>
		</ChatPageBody>
	);
}

export default ChatPage;