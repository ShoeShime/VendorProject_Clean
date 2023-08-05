import React from "react";
import styled from "styled-components";


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

const SearchMessage = styled.div`

`;

//May need to implement a search bar to search for a user

const Threads = () =>{


	return(
		<HeaderContainer>
			<HeaderWrapper>

				<HeaderProfile/>
				<HeaderText>Messages</HeaderText>

				<NewInbox/>

			</HeaderWrapper>

			<SearchMessage>SearchBar</SearchMessage>
		</HeaderContainer>
	);
}

export default Threads;