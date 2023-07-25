import React from "react";
import styled from "styled-components";


import LocationBox from "../../../../components/LocationBox";


const Location_Box = styled.div`
    grid-area: l;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const LocationDisplay = () => {

	return(
		<Location_Box>
			<LocationBox/>
		</Location_Box>
	);
}

export default LocationDisplay;