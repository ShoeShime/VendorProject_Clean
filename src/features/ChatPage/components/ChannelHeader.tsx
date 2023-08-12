import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	background-color: #f5f5f5;

	display: flex;

	border-bottom: 1px solid #CCCCCC;
	
`;

const Avatar = styled.img`

	height: 100px;
	width: 100px;

	border-radius: 50%;

`;

const TextWrapper = styled.div`

	display: flex;
	flex-direction: column;

`;

const UserName = styled.h1`

	margin-top: 20px;
	margin-bottom: 0px;

`;

const Lastonline = styled.p`

	margin: 0;
`;


//Add an extra component that allows user to click in 
//order to learn more info about the user they are talking to

const ChannelHeader = () =>{


	return(
		<HeaderContainer className="ChannelHeader">
			<Avatar>
				
			</Avatar>

			<TextWrapper>
				<UserName>
					The Name goes here
				</UserName>

				<Lastonline>
					2 hours ago
				</Lastonline>
			</TextWrapper>


		</HeaderContainer>
	);
}

export default ChannelHeader;