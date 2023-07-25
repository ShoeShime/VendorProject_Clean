import React from "react";
import styled from "styled-components";


const Categories = styled.div`
    grid-area: c;
    background-color: #F3F2F2;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
`;


const VendorCategories = ({}) =>{

	return(
		<Categories></Categories>
	);
}

export default VendorCategories;