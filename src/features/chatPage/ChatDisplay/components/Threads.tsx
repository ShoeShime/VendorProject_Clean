import React from "react";
import styled from "styled-components";


import ThreadsHeader from "./ThreadsHeader";
import Conversation from "./Conversation";

const ThreadsContainer = styled.div`

	width: 400px;

`;


const Threads = () =>{

	return(
		<ThreadsContainer>
			<ThreadsHeader/>
			
			<Conversation/>

		</ThreadsContainer>
	);
}

export default Threads;