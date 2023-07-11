import React from "react"
import { User, useAuth0 } from "@auth0/auth0-react"

const Auth0Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  //displays user's picture, name, and email
  //just for testing/building purposes will be replaced with actual useful component in future
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Auth0Profile