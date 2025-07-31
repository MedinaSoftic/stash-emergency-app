import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../User/UserContext";

export default function DashBoardProtected({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}