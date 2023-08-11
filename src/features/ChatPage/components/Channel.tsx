import React from "react";
import styled from "styled-components";


//Channels components
import Window from "./Window";

//This component should be renamed to ChatRoom if possible
		//or should the Window component be renamed to ChatRoom(?)


const ChannelContainer = styled.div`


`;

const Channel = () =>{


	return(
		<ChannelContainer className="ChannelContainer">

			<Window/>

		</ChannelContainer>
	);
}

export default Channel;