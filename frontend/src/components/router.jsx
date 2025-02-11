import { createBrowserRouter } from "react-router-dom";
import { LoginCallback, SecureRoute } from "@okta/okta-react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login/callback", element: <LoginCallback /> },
  { path: "/dashboard", element: <SecureRoute><Dashboard /></SecureRoute> }
]);
