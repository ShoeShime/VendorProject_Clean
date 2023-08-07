import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
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

`;

const SentMessageText = styled.span`

`;

const RecievedMessageWrapper = styled.div`

`;

const RecievedMessageText = styled.span`

`;



const MessageList = () =>{


	return(
		<>
			<MessageContainer>
				<RecievedMessageWrapper>
					<RecievedMessageText>
						Test 1: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice.
						Adding More Text, Adding More Text, Adding More Text, Adding More Text...
					</RecievedMessageText>
				</RecievedMessageWrapper>

				<SentMessageWrapper>
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
