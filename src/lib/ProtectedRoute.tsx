import { CallbackPage } from "../features/misc/CallbackPage"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

//wrapper for the Route component that prevents it from being accessed unless the user is logged in
//in the future we should check to see if the user is the right type of account to access that
//route (ex: Customers shouldn't be able to access Vendor route )

//this is a Higher-Order component https://www.patterns.dev/posts/hoc-pattern/
export const ProtectedRoute = ( {component }) => {
    const Component = withAuthenticationRequired( component, {
        //https://auth0.github.io/auth0-react/interfaces/WithAuthenticationRequiredOptions.html
    })

    return <Component />
}