import {useState, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import usStateCodes from 'us-state-codes';

import styled from 'styled-components';

const Box = styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    font-size: 15px;
    align-content: center;
    background-color: #FF6D33;
    color: white;
    font-weight: bold;
    padding: 5px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

export default function LocationBox(){

    const [status, setStatus] = useState(null);
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGhhbmd1eWVuMjEwMiIsImEiOiJjbGdweTd6NHQwMTVwM2VwMjV1bjlkampvIn0.Bt266R6IByATi1Md2GKd2A';
        if (!navigator.geolocation){
            setStatus('Geolocation is not supported by your browser.');
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                setStatus(null);
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;

                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`)
                .then(response => response.json())
                .then(data => {
                  const placeName = data.features[0].place_name;
                  const cityState = placeName.split(',')[2];
                  const stateName = placeName.split(',')[3].trim().split(' ')[0];
                  setCity(cityState);
                  setState(usStateCodes.getStateCodeByStateName(stateName));
                });
            })
        }}
    );

    return (
        <Box>
            {(!status) ? city + ', ' + state : status}
        </Box>
    )
}