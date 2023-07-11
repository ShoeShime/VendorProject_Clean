import React, {useState} from "react";
import styled from "styled-components";
import Message from "./Message";
import Messages from "./Messages";




const MessageSender = ()=>{
	const [messages, setMessages] = useState<string[]>([]);

	const handleMessageSubmit = (message: string) =>{
		console.log(message + " this is being displayed")
		setMessages([...messages, message]);
		
	};

	return(
		<>
			<Messages messages={messages}/>

			<Message onMessageSubmit={handleMessageSubmit}/>
		</>
	);
}

export default MessageSender;