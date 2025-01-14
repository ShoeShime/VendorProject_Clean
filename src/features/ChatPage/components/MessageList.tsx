import React from "react";
import styled from "styled-components";

//MessageContainer
	//This component is responsible for taking up the whole page(?)
////////////////////////////////
	//height: calc(100vh - 230px).. this should be moved to a higher parent heriarchy level if possible
	//but navbar makes it impossible or difficult to do that.

const MessageContainer = styled.div`
	background-color: #EBF8F8;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	height: calc(100vh - 230px);

	padding: 10px;

	overflow-y: auto;
`;

const SentMessageWrapper = styled.div`

	background-color: #1982FC;

	flex-direction: row-reverse;
	align-self: flex-end;

	border-radius: 25px;

	width: 50%;

	padding: 0.7em;

	margin-top: 5px;
	margin-left: 3px;

`;

const SentMessageText = styled.span`
	color: #FFFFFF;

	text-align: right;

	margin-inline-start: 9px;
	margin-inline-end: 9px;

`;

const ReceivedWrapper = styled.div`

	display: flex;

`;

const RecievedAvatar = styled.img`

	height: 50px;
	width: 50px;

	border-radius: 50%;
`;

const RecievedMessageWrapper = styled.div`

	background-color: #AAAAAA;

	flex-direction: row-reverse;
	align-self: flex-start;

	border-radius: 25px;

	width: 50%;

	padding: 0.7em;

	margin-top: 5px;
	margin-left: 3px;

`;

const RecievedMessageText = styled.span`
	color: #000000;

	text-align: right;

	margin-inline-start: 9px;
	margin-inline-end: 9px;
`;

////////////////////////////////

const MessageList = () =>{


	return(
		<>
			<MessageContainer className="MessagedDisplayed">
				<ReceivedWrapper className="RecievedMessageWrapper">
					<RecievedAvatar>

					</RecievedAvatar>
					<RecievedMessageWrapper>
						<RecievedMessageText>
							Test 1: This is a bunch of line of text, would this work hopefully. 
							I need to add more text horray okay a bit more, this looks kinda nice.
							Adding More Text, Adding More Text, Adding More Text, Adding More Text...
						</RecievedMessageText>
					</RecievedMessageWrapper>
				</ReceivedWrapper>

				<SentMessageWrapper className="SentMessageWrapper">
					<SentMessageText>
						Test 2: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice
					</SentMessageText>
				</SentMessageWrapper>

			</MessageContainer>
		</>
	);
}

export default MessageList;
