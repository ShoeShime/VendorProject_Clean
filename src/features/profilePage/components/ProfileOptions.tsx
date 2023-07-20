import React from "react";
import styled from "styled-components";



const Profile_Options = styled.div`
    grid-area: o;
    background-color: #DADADA;
    color: white;
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-weight: bold;

    .info_button_inactive,
    .logout_button_inactive{
        border-radius: 10px;
        width: 50%;
        padding: 10px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        align-self: center;
        cursor: pointer;
    }

    .info_button_active,
    .logout_button_active {
        border-radius: 10px;
        width: 50%;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        align-self: center;
        background-color: #FF6D33;
        padding: 10px;
        cursor: pointer;
    }
`;


const ProfileOptions = () =>{

	return(
		<div>

		</div>
	);
}

export default ProfileOptions;