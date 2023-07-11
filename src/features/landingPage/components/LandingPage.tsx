import Login from './Login'
import { GradientContainer } from '../../../components/GradientContainer'
import TextAnimation from './AnimatedText'
import styled from 'styled-components'
import { Phone } from './Phone'

const TextDiv = styled.div`
    width: 75vw;
    height: 23vh;
    margin-top: 2.6vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* background-color: black; */
`

const Text = styled.span`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    font-family: "Inter";
`

export const LandingPage = () => {

    return (
        <GradientContainer>
            <Phone />
            <TextDiv>
            <Text fontSize={"40px"} color={"white"}>Your next</Text>
                <TextAnimation/>
            <Text fontSize={"40px"} color={"white"}>is around the corner</Text>
            </TextDiv>
            < Login />
        </GradientContainer>
    )
}