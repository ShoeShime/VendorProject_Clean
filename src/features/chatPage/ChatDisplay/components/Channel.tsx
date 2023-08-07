import React from "react";
import styled from "styled-components";


//Channels components
import Window from "./Window";

//This component should be renamed to ChatRoom if possible
		//or should the Window component be renamed to ChatRoom(?)


const WindowContainer = styled.div`



`;

const Channel = () =>{


	return(
		<WindowContainer className="WindowContainer">

			<Window/>

		</WindowContainer>
	);
}

export default Channel;