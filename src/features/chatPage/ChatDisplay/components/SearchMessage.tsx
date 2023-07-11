import React from "react";
import styled from "styled-components";
import SearchIcon from "../misc/SearchIcon.png";


const SearchForm = styled.div`
	background-color: #D3D3D3;

	border: none;
	border-radius: 20px;
	box-sizing: border-box;
	
	display: flex;
	align-items: center;

	width: 100%;
	padding: 5px;

	margin-bottom: 5px;
`;

const SearchInput = styled.input`
	background-color: #D3D3D3;
	color: #121212;

	border: none;
	outline: none;

	margin-left: 5px;

	width: 100%;

	::placeholder{
		color: #333333;
	}
`;


const SearchPicture = styled.img`

	width: 20px;
	height: 20px;

	border-radius: 50%;

	
`;

const SearchMessage = () =>{


	return(
		<SearchForm>
			
			<SearchPicture src={SearchIcon}/>
			<SearchInput placeholder="Search"></SearchInput>

		</SearchForm>
	);
}

export default SearchMessage;