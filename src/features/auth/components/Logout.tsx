import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Logout = () => {
    const { logout } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: 'http://localhost:5173/index.html'
            }
        })
    }

    return (
        <button onClick={handleLogout}>
            Sign Out
        </button>
    )
}

export default Logout