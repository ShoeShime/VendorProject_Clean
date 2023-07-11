import React,  {useState} from "react";
import styled from "styled-components";

const MessageList = styled.div`
	background-color: #EBF8F8;
	display: flex;

	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;

	height: calc(100vh - 115px);
	padding: 10px;

	overflow-y: auto;
`;

const SentMessageWrapper = styled.div`	

	background-color: #1982FC;

	border-radius: 25px;

	width: 50%;

	flex-direction: row-reverse;
	align-self: flex-end;

	margin-top: 5px;
	margin-left: 3px;
`;

const ReceivedMessageWrapper = styled.div`	

	background-color: #AAAAAA;

	border-radius: 25px;

	width: 50%;

	flex-direction: row-reverse;
	align-self: flex-start;
	
	margin-top: 5px;
	margin-left: 3px;
`;

const SentMessageText = styled.p`

	color: #FFFFFF;

	text-align: right;

	margin-inline-start: 9px;
	margin-inline-end: 9px;

`;

const ReceivedMessageText = styled.p`

	color: #000000;

	text-align: left;

	margin-inline-start: 9px;
	margin-inline-end: 9px;

`;

interface MessagesProps {
  messages: string[];
}

const Messages: React.FC<MessagesProps> = ({messages}) =>{

	return(
			<MessageList>
				<SentMessageWrapper>

					<SentMessageText>
						Test 1: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice
					</SentMessageText>

				</SentMessageWrapper>

				<ReceivedMessageWrapper>

					<ReceivedMessageText>
						Test 2: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice
					</ReceivedMessageText>

				</ReceivedMessageWrapper>

				<ReceivedMessageWrapper>

					<ReceivedMessageText>
						I want Icecream!
					</ReceivedMessageText>

				</ReceivedMessageWrapper>

				{messages.map((message, index) => (
					<SentMessageWrapper key={index}>

						<SentMessageText>
							{message}
						</SentMessageText>

					</SentMessageWrapper>
				))}
					
			</MessageList>
	);
}

export default Messages;