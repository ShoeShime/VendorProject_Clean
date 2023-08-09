import React from "react";
import styled from "styled-components";


import SearchMessage from "./SearchMessage";


const HeaderContainer = styled.div`

	background-color: #f0f0f0;

	display: flex;
	flex-direction: column;


	padding: 10px;
	border-bottom: 1px solid #CCCCCC;
`;

const HeaderWrapper = styled.div`

	display: flex;
	align-items: center;
	justify-content: space-between;

	margin: 10px;
`;

const HeaderProfile = styled.img`

	width: 50px;
	height: 50px;

	border-radius: 50%;
	margin-right: 10px;

`;

const HeaderText = styled.h1`

	font-size: 20px;

	margin: 0;
`;

const NewInbox = styled.div`


`;

//May need to implement a search bar to search for a user

const Threads = () =>{


	return(
		<HeaderContainer className="ThreadsHeader">
			<HeaderWrapper className="UserInfo ThreadsHeader">

				<HeaderProfile/>
				<HeaderText>Messages</HeaderText>

				<NewInbox/>

			</HeaderWrapper>

			<SearchMessage/>
		</HeaderContainer>
	);
}

export default Threads;