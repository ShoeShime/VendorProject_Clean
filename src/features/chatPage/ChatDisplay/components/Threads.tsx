import React from "react";
import styled from "styled-components";


import ThreadsHeader from "./ThreadsHeader";
import Conversation from "./Conversation";

const ThreadsContainer = styled.div`

	width: 50%;

	min-width: 400px

`;

const ConversationWrapper = styled.div`


`;


const Threads = () =>{

	return(
		<ThreadsContainer className="ThreadsContainer">
			<ThreadsHeader/>
			
			<ConversationWrapper>
				<Conversation/>
			</ConversationWrapper>
			
		</ThreadsContainer>
	);
}

export default Threads;