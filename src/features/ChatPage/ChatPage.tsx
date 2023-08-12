import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../components/Navbar";

//ChatPage components
import Channel from "./components/Channel";
import Threads from "./components/Threads";


const ChatPageContainer = styled.div`


`;

const ChatWrapper = styled.div`

	display: flex;

`;


//Channel components
	//This component renders a single chatroom for the user 
	//to view if they have selected a channel

//Threads components
	//this components shows users different chats rooms that are available

//FIXME: ThreadHeader and ChannelHeader components are mislign but could be fixed later

const ChatPage = () =>{
	console.log("Loading Chat Page");


	

	return(
			<ChatPageContainer className="ChatPageWrapper">
				<ChatWrapper className="ChatPage">
					<Threads/>

					<Channel/>

				</ChatWrapper>

				<Navbar/>

			</ChatPageContainer>
	);
}

export default ChatPage;