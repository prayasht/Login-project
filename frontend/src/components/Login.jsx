import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

export default function Login() {
  const { oktaAuth, authState } = useOktaAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      navigate("/dashboard"); // Redirect if already logged in
    }
  }, [authState, navigate]);

  if (!authState) return <p>Loading...</p>;

  const handleSpringBootLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Login successful!");
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  const handleOktaLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Spring Boot Login Form */}
        <form className="space-y-4" onSubmit={handleSpringBootLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign In with Spring Boot
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-1/4 h-px bg-gray-400"></div>
          <p className="text-sm text-gray-600">OR</p>
          <div className="w-1/4 h-px bg-gray-400"></div>
        </div>

        {/* Okta Login */}
        <button
          onClick={handleOktaLogin}
          className="w-full p-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900"
        >
          Sign in with Okta
        </button>
      </div>
    </div>
  );
}
