import React from "react";
import styled from "styled-components";

import ToggleSwitch from "../../../../components/ToggleSwitch";


const Toggle_Switch = styled.div`
    grid-area: t;
`;


const VendorToggleSwitch = ({isActive, setActive}) =>{

	return(
		<Toggle_Switch>
			<ToggleSwitch
				toggled = {isActive}
				setActive = {setActive}
			>
			</ToggleSwitch>
		</Toggle_Switch>
	);
}

export default VendorToggleSwitch;