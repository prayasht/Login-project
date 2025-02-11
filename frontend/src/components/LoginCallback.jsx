import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";

export default function LoginCallback() {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) return;
    if (authState.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [authState, navigate]);

  return <p>Signing in...</p>;
}
