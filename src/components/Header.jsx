import Avatar from "./Avatar";
import styled from 'styled-components';

const Home_Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f2f2;
`;

const Header_Center = styled.div`
    width: 100%;
    display: flex;
    gap: 25px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    align-self: center;
`;



export default function Header({username, src}){
    return (
        <Home_Header>
            <Header_Center>
                <Avatar src={src} name={username}/>
                <h2>{username}</h2>
            </Header_Center>

        </Home_Header>
    )
}