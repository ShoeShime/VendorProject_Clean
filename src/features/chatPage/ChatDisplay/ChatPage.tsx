import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../../components/Navbar";

//ChatPage components
import Channel from "./components/Channel";
import Threads from "./components/Threads";



//Background
const Chat = styled.div`
	position: absolute;
	background-color: #FFFFFF;

	display: flex;
	flex-direction: row;

	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`



`;


//Channel components
	//This component renders a single chatroom for the user 
	//to view if they have selected a channel


//Threads components
	//this components shows users different chats rooms that are available


const ChatPage = () =>{

	return(
		<Wrapper>
			<Chat className="ChatPage">
				<Threads/>

				<Channel/>

			</Chat>

			<Navbar/>

		</Wrapper>
	);
}

export default ChatPage;