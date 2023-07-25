import React, {useState} from "react";
import styled from "styled-components";

const Edit_Button = styled.div`
    grid-area: e;
    width: max-content;
    height: max-content;
    border-radius: 20px;
    font-size: 20px;
    align-content: center;
    background-color: #FF6D33;
    color: white;
    font-weight: bold;
    padding: 7px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

//Recheck again for setOpenEdit variable make sure it works correctly and as needed

//What is the Edit_button suppose to do?

const EditButton = ({setOpenEdit}) =>{

	return(
		<Edit_Button onClick={() => setOpenEdit(true)}>
			Edit Profile
		</Edit_Button>
	);
}

export default EditButton;