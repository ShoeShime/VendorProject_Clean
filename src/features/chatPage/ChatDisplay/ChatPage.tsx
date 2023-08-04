import React from "react";
import styled from "styled-components";


//Global components
import Navbar from "../../../components/Navbar";





//Background
const Chat = styled.div`
	position: fixed;
	background-color: #FFFFFF;


	height: 100%;
	width: 100%;
`;

//These are placeholder components
const Channel = styled.div`

`;

const Window = styled.div`

`

const ChannelHeader = styled.div`

`;

const MessageList = styled.div`

`;

const MessageInput = styled.div`

`;

const Threads = styled.div`

`;

export function ChatPage(){


	return(
		<>
			<Chat>
				<Channel>
					<Window>

						<ChannelHeader/>
						<MessageList/>
						<MessageInput/>

					</Window>
				</Channel>
				
				<Threads/>
			</Chat>

			<Navbar/>
		</>
	);
}

export default ChatPage;