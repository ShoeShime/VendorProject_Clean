import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// wrapper for the Auth0Provider class that adds the ability to
// use the navigate function within the app
export const Auth0ProviderWithNavigate = ({ children }) => {
    const navigate = useNavigate();
  
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;
  
    const onRedirectCallback = (appState) => {
      navigate(appState?.returnTo || window.location.pathname);
    };
  
    if (!(domain && clientId && redirectUri)) {
      return null;
    }
  
    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: redirectUri,
        }}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    );
  };