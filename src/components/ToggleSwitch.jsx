import {useState} from "react";

import Modal from "./Modal";

import styled from 'styled-components';

const Switch_Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 18px;

    .switch_input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: bacground-color 0.4s ease;
        border-radius: 18px;
        box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 14px;
        width: 14px;
        left: 2px;
        bottom: 2px;
        background-color: #fff;
        border-radius: 50%;
        transition: transform 0.4s ease;
    }
    
    .switch_input:checked + .slider {
        background-color: #324574;
    }
    
    .switch_input:checked + .slider:before {
        transform: translateX(22px);
    }
`;

const Switch_Strong = styled.strong`
    width: 100%;
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-bottom: 5px;
    font-size: 15px;
`;

const ToggleSwitch = ({ toggled, ...props }) => {
    const [isToggled, setIsToggled] = useState(toggled);
    const [activeText, setText] = useState(`${(!toggled) ? "You're Inactive" : "You're Active"}`);
    const [openModal, setOpenModal] = useState(false);

    const setData = (data) => {
        if (data === 'Continue' && !isToggled){
            onToggle()
        }
    }

    const onToggle = () => {
        if (isToggled) {
            setText("You're Inactive");
        } else {
            setText("You're Active");
        }
        setIsToggled(!isToggled);
        props.setActive(!isToggled);
    }

    const checkActive = (bool) => {
        if (!isToggled){
            setOpenModal(true);
        } else {
            setOpenModal(false);
            onToggle();
        }
    }

    return (
        <div>
            <Switch_Strong>{activeText}</Switch_Strong>
            <Switch_Container>
                <Switch>
                    <input
                        className= "switch_input"
                        type = "checkbox"
                        checked = {isToggled}
                        onChange = {checkActive}
                    />
                    <span className = "slider"/>
                </Switch>
            </Switch_Container>

            <Modal content="You are going to broadcast your location to customers." open={openModal} setOpenModal={setOpenModal} setData={setData}/>
        </div>
    );
};

export default ToggleSwitch;