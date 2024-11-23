import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthenticate: boolean;
  children?: ReactElement;
};

const ProtectedRoutes = ({ children, isAuthenticate }: Props) => {
  if (!isAuthenticate) {
    return <Navigate to={"/"} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
