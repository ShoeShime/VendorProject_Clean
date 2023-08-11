import React from "react";
import styled from "styled-components";


import ChannelHeader from "./ChannelHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
//I am confused on how to desgin these components using style-components

//const MessageInput = styled.div``;

const WindowContainer = styled.div`



`;

const Window = () =>{

	return(
		<>
			<WindowContainer className="WindowContainer">

				<ChannelHeader/>
				<MessageList/>
				<MessageInput/>

			</WindowContainer>
		</>
	);
}

export default Window;