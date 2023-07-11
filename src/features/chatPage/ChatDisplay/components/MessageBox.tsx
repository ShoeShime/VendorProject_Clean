import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";
import CatPicture from "../misc/ThumbsUp.jpg";
import GoofyCat from "../misc/GoofyCat.jpeg";

import Link from "react-router-dom";

const MessageWrapper = styled.div`
	background-color: #FFFFFF;



`; 

//implement array; currently not in use
const conversations: Conversation[] = [
	{
		id: 1,
		profilePic: CatPicture,
		name: "Cesar",
		lastmessage: "I want icecream",
		timestamp: "11:00 AM",
		isSeen: true,
		chatRoomUrl: "/chatRoom"
	},
	{
		id: 2,
		profilePic: GoofyCat,
		name: "Jolene",
		lastmessage: "Are you open right now?",
		timestamp: "3:00 PM",
		isSeen: true,
		chatRoomUrl: "/chatRoom"
	}
];


const MessageBox = () =>{


	return(
		<MessageWrapper className="Inbox" conversations={conversations}>
			

			{conversations.map((conversations)=>(
				<Conversation 
					key={conversations.id}
					profilePic={conversations.profilePic}
					name={conversations.name}
					lastmessage={conversations.lastmessage}
					timestamp={conversations.timestamp}
					isSeen={conversations.isSeen}
					chatRoomUrl={conversations.chatRoomUrl}
				/>
			))}


		</MessageWrapper>
	);
}

export default MessageBox;