import { createBrowserRouter } from "react-router-dom";
import {  SecureRoute } from "@okta/okta-react";
import LoginCallback from "./LoginCallback";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login/callback", element: <LoginCallback /> },
  { path: "/dashboard", element: <SecureRoute><Dashboard /></SecureRoute> }
]);
