import React from "react";
import styled from "styled-components";


import ChannelHeader from "./ChannelHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
//I am confused on how to desgin these components using style-components

//const MessageInput = styled.div``;

const WidnowWrapper = styled.div`

	height: 85%;

`;

const Window = () =>{

	return(
		<>
			<WidnowWrapper className="WindowWrapper">

				<ChannelHeader/>
				<MessageList/>
				<MessageInput/>

			</WidnowWrapper>
		</>
	);
}

export default Window;