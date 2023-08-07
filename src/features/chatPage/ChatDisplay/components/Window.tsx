import React from "react";
import styled from "styled-components";


import ChannelHeader from "./ChannelHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
//I am confused on how to desgin these components using style-components

//const MessageInput = styled.div``;


const Window = () =>{

	return(
		<>
			<ChannelHeader/>
			<MessageList/>
			<MessageInput/>
		</>
	);
}

export default Window;