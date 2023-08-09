import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../../components/Navbar";

//ChatPage components
import Channel from "./components/Channel";
import Threads from "./components/Threads";



const ChatPageWrapper = styled.div`



`;

//Background
const Chat = styled.div`

	display: flex;

`;


//Channel components
	//This component renders a single chatroom for the user 
	//to view if they have selected a channel


//Threads components
	//this components shows users different chats rooms that are available


const ChatPage = () =>{

	return(
		<ChatPageWrapper className="ChatPageWrapper">
			<Chat className="ChatPage">
				<Threads/>

				<Channel/>

			</Chat>

			<Navbar/>

		</ChatPageWrapper>
	);
}

export default ChatPage;