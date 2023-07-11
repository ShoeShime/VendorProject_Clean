import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

import {Link} from "react-router-dom";

const LoadingSpinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export const CallbackPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const routerNavigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      const userSub = user.sub;

      setIsLoading(true);

      const userProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/users/${userSub}`);
          const data = response.data;
          if (response.status === 200 && response.data) {
            if (data.isRegistered === false) {
              routerNavigate('/register/');
            } else {
              routerNavigate(`/${data.profileType}/`);
            }
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      userProfile();
    }
  }, [isAuthenticated, routerNavigate, user.sub]);

  if (isLoading) {
    return (
      <Link
        to={"/customer"}
      >
        <p>Go To customer Dashboard</p>
      </Link>
    );

    //return <LoadingSpinner />;
  }
}