import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ route, children }) => {
  const { role, userInfo } = useSelector((state) => state.auth);
  if (!role) {
    return <Navigate to={"/login"} replace />;
  }

  if (!userInfo) {
    // Handle case when userInfo is not available
    return <Navigate to={"/unauthorized"} replace />;
  }

  if (!route.role) {
    // Handle case when route.role is not defined
    if (route.ability === "seller") {
      return <Suspense fallback={null}>{children}</Suspense>;
    }
  }

  if (userInfo.role !== route.role) {
    // Handle case when user's role does not match route's role
    return <Navigate to={"/unauthorized"} replace />;
  }

  if (route.status) {
    // Handle case when route.status is defined
    if (route.status !== userInfo.status) {
      // Handle case when user's status does not match route's status
      if (userInfo.status === "pending") {
        return <Navigate to={"/seller/account-pending"} replace />;
      } else {
        return <Navigate to={"/seller/account-inactive"} replace />;
      }
    }
  } else if (route.visibility) {
    // Handle case when route.visibility is defined
    if (!route.visibility.includes(userInfo.status)) {
      // Handle case when user's status is not in route's visibility list
      return <Navigate to={"/seller/account-pending"} replace />;
    }
  }

  // If none of the above conditions match, render children component
  return <Suspense fallback={null}>{children}</Suspense>;
};

export default ProtectRoutes;
