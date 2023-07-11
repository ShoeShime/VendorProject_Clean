import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


//Header, Top of the Page
const MessageHeader = styled.header`
	position: fixed;
	background-color: #B5B5B5;
	
	height: 10%;
	width: 100%;
`;

const MyName = styled.p`


	font-weight: bold;
	font-size: 28px;
`;

const ChatHeaderRoom = () =>{


	return(
	<MessageHeader>
		<Link
			to={"/chat"}
		>
			<p>Back</p>

		</Link>

		<MyName>Vendor Name</MyName>
		
	</MessageHeader>
	);
}

export default ChatHeaderRoom;