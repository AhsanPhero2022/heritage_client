import React, { ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <progress className="progress w-56">Loading...</progress>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
