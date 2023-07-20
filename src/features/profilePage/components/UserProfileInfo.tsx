import React from "react";
import styled from "styled-components";


const Username = styled.div`
    grid-area: n;
    margin-right: 10px;
    justify-content: left;
    align-items: center;
    display: flex;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

const UserID = styled.div`
    grid-area: i;
    margin-right: 10px;
    justify-content: left;
    display: flex;
    font-size: 15px;
    font-style: italic;
    color: #7A7A7A;
`;

//In The return statement below for Username & UserID may need to be changed for backend database:
	//  <Username> {fname} {lname}
    //  <UserID> {userID}
    

//May need to be included as a parameter for this file


const UserProfileInfo = ()=>{
	var fname = "thanh";
	var lname = "stuff";

	var userID = "hello";

	return(
		<div>
			<Username>{fname}, {lname}</Username>

			<UserID>{userID}</UserID>

		</div>
	);
}

export default UserProfileInfo;