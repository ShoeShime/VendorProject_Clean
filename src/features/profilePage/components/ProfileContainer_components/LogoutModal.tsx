import React, {useState} from "react";
import styled from "styled-components";

import SignOutModal from "../../../../components/SignOutModal";

const LogOut_Modal = styled.div`
    position: fixed;
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-self: center;
    align-self: center;
    z-index: 1;
`;

//In The return statement below the 3 variables may need to be changed for backend database:
    //open={openModal}
    //setOpenModal={setOpenModal}
    //setData={setData}

const LogoutModal = ({openModal, setOpenModal, setChooseData}) =>{
/*
    const [openModal, setOpenModal] = useState(false);
    const [chooseData, setChooseData] = useState("");
*/
    const setData = (data) => {
        setChooseData(data);
    }

	return(
        <LogOut_Modal>
            <SignOutModal content="You are going to log out from your account"
            open={openModal}
            setOpenModal={setOpenModal}
            setData={setData}/>
        </LogOut_Modal>
	);
}

export default LogoutModal;
