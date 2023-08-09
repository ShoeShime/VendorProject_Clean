import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../../components/Navbar";

//ChatPage components
import Channel from "./components/Channel";
import Threads from "./components/Threads";



const Wrapper = styled.div`
	position: absolute;


`;

//Background
const Chat = styled.div`
	background-color: #FFFFFF;

	display: flex;
	flex-direction: row;

	height: 100%;
	width: 100%;
`;


//Channel components
	//This component renders a single chatroom for the user 
	//to view if they have selected a channel


//Threads components
	//this components shows users different chats rooms that are available


const ChatPage = () =>{

	return(
		<Wrapper className="Wrapper of the Whole Page">
			<Chat className="ChatPage">
				<Threads/>

				<Channel/>

			</Chat>

			<Navbar/>

		</Wrapper>
	);
}

export default ChatPage;