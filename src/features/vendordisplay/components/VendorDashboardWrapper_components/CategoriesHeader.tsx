import React from "react";
import styled from "styled-components";


const Categories_Header = styled.div`
    grid-area: ch;
    font-size: 18px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;



const CategoriesHeader = () =>{

	return(
		<Categories_Header>Categories</Categories_Header>
	);
}

export default CategoriesHeader;