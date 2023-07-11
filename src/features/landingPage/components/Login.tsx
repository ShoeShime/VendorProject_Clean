import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components'

const LoginButton = styled.button`
  background-color: #C6B1F6;
  border-radius: 8px;
  border: none;
  width: clamp(150px, 160px, 180px);
  height: 6vh;
`

const Login = () => {
  const { loginWithRedirect} = useAuth0();

  //after login the app redirects to the callback page which checks
  //the database to see what dashboard to send the user to
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/callback'
      }
    })
  }

  return (
    <LoginButton onClick={handleLogin}>
      Sign In
    </LoginButton>
  )
}

export default Login