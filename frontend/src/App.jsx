import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Security } from "@okta/okta-react";
import { oktaConfig } from "./components/oktaConfig";
import { router } from "./components/router";
import { OktaAuth } from "@okta/okta-auth-js";



function App(){
  const oktaAuth = new OktaAuth(oktaConfig);
const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || "/dashboard");
};
return(
  <React.StrictMode>
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <RouterProvider router={router} />
    </Security>
  </React.StrictMode>
)
}
export default App