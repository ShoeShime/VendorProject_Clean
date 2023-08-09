import { useState } from "react";
import { BsPersonFill, BsFillChatFill, BsHouseFill, BsFillMapFill} from 'react-icons/bs';
import { Link, matchPath, useLocation } from 'react-router-dom';

import styled from 'styled-components';

const NavbarContainer = styled.div`

    margin: 0 0 0 0;
    width: 100%;

`;

const Navigation = styled.div`
    position: fixed;
    background: #d9d9d9;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 55px;
    width: 100%;
    bottom: 0;
`;

const Navigation_ul = styled.ul`
    position: relative;
    list-style: none;
    display: flex;
`;

const Navigation_link = styled.li`
    position: relative;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon{
        position: relative;
        display: block;
        line-height: 30px;
        color: black;
        padding: 7px;
    }
    
    .icon-active{
        position: relative;
        display: block;
        line-height: 50px;
        color: #FF6D33;
    }

    .navbar-inactive:hover{
        transform: translateY(-10px);
        transition: 0.5s;
    }

    .navbar-active .icon{
        color: #FF6D33;
    }

    .name{
        position: absolute;
        transform: translateY(30px);
        opacity: 1;
        transition: 0.5s;
        color: black;
        text-decoration-line: overline;
        text-decoration-color: #FF6D33;
    }

    .navbar-inactive:hover .name{
        opacity: 1;
        transform: translateY(-5px);
    }
`;

export default function Navbar() {
    const menus = [
        {
          key: 0,
          icon: <BsHouseFill/>,
          name: "Home",
          url: "/vendor",
        },
        {
          key: 1,
          icon: <BsFillMapFill/>,
          name: "Map",
          url: "/map",
        },
        {
          key: 2,
          icon: <BsPersonFill/>,
          name: "Profile",
          url: "/profile",
        },
        {
          key: 3,
          icon: <BsFillChatFill/>,
          name: "Chat",
          url: "/chat",
        },
    ]

    const location = useLocation();
    const currentRoute = menus.find(route => matchPath(route.url, location.pathname));

    const [selected, setSelected] = useState(currentRoute.key);


    return (
        <NavbarContainer className="NavbarContainer">
            <Navigation className="Navbar">
                <Navigation_ul>
                    {menus.map((val, index) => {
                        return (
                            <Navigation_link>
                                <Link 
                                    to={val.url}
                                    key={index}
                                    onClick={() => setSelected(index)}
                                    className ={`${index === selected ? "navbar-active" : "navbar-inactive"}`}
                                >
                                    <div className = {`${index === selected ? "icon-active" : "icon"}`}>{val.icon}</div>
                                    <div className = "name">{val.name}</div>
                                </Link>
                            </Navigation_link>
                        );
                    })}
                </Navigation_ul>
            </Navigation>
        </NavbarContainer>
    )
}