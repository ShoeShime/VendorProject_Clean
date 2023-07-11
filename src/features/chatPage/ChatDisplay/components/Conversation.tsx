import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Convo = styled.div`
	background-color: #d2d2d4;

	display: flex;

	border-radius: 10px;

	margin: 10px;

	min-height: 100px;

	cursor: pointer;
	transition: all 0.2 ease-in-out;

	&:hover{
		background-color: #f5f5f5;
	}

`;

const PictureContainer = styled.div`


	display: flex;

	align-items: center;

	margin-left: 5px;
	margin-right: 5px

`;

const ProfilePic = styled.img`

	width: 60px;
	height: 60px;

	border-radius: 50%;

`;

const TextContainer = styled.div`

	width: 100%;

	margin-right: 7.5px;
	margin-left: 2.5px;

`;

const Container_1 = styled.div`

	display: flex;
	justify-content: space-between;

	margin-top: 15px;

`;

const MessageName = styled.p`

	color: #333333;


	font-size: 20px;
	font-weight: bold;

	margin: 0px;

`;

const Timestamp = styled.p`

	color: #333333;


	font-size: 15px;
	font-weight: bold;

	margin: 3px 0px 0px 0px;

`;

const Container_2 = styled.div`

	display: flex;
	justify-content: space-between;

	margin: 0px 0px 0px 0px;

`;

const TextMessage = styled.p`

	color: #666666;

	font-size: 14px;

	margin: 5px 0px 0px 5px;

`;

interface Conversation{
	id: number,
	profilePic: string,
	name: string,
	lastmessage: string,
	timestamp: string,
	isSeen: boolean,
	chatRoomUrl: string
}

const Conversation = ({profilePic, name, lastmessage, timestamp, isSeen, chatRoomUrl}) =>{

	return(
		<Link
			to={chatRoomUrl}
		>
			<Convo className="Conversation">

				<PictureContainer className="Profile_Pic">
					<ProfilePic  className="Picture" src={profilePic}>

					</ProfilePic>
				</PictureContainer>

				<TextContainer className="Inbox_Info">
					
					<Container_1>
						<MessageName className="UserName">
							{name}
						</MessageName>
						
						<Timestamp className="TimeStamp">
							{timestamp}
						</Timestamp>
					</Container_1>

					<Container_2>
						<TextMessage>
							{lastmessage}
						</TextMessage>

					</Container_2>

				</TextContainer>

			</Convo>
		</Link>
	);
}

export default Conversation;