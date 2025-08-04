import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../User/UserContext";

//Protects the dashboard route from unauthenticated users 
export default function DashBoardProtected({ children }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }
// if user is logged in, render to dashboard (the child component)
  return children;
}