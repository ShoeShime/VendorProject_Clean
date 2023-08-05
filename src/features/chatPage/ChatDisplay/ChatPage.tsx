import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../../components/Navbar";

//ChatPage components
import Channel from "./components/Channel";
import Threads from "./components/Threads";



//Background
const Chat = styled.div`
	position: fixed;
	background-color: #FFFFFF;


	height: 100%;
	width: 100%;S
`;


//Channel components
	//This component renders a single chatroom for the user 
	//to view if they have selected a channel


//Threads components
	//this components shows users different chats rooms that are available


const ChatPage = () =>{

	return(
		<>
			<Chat>
				<Channel/>

				<Threads/>
			</Chat>

			<Navbar/>
		</>
	);
}

export default ChatPage;