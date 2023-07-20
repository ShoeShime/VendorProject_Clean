import React, {useState} from "react";
import styled from "styled-components";


const Password_Button = styled.div`
    grid-area: c;
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
    row-gap: 10px;
`;


const PasswordButton = () =>{
    const [passwordModal, setPasswordModal] = useState(false);
    const [passwordModalChoice, setPasswordModalChoice] = useState(null);

	return(
		<Password_Button onClick={() => setPasswordModal(true)}>
            Change Password
        </Password_Button>
	);
}

export default PasswordButton;