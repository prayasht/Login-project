import { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

export default function Login() {
  const { oktaAuth, authState } = useOktaAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!authState) return <p>Loading...</p>;

  const handleLogin = async (e) => {
    e.preventDefault();
    oktaAuth.signInWithRedirect();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form className="space-y-4">
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-1/4 h-px bg-gray-400"></div>
          <p className="text-sm text-gray-600">OR</p>
          <div className="w-1/4 h-px bg-gray-400"></div>
        </div>

        {/* Sign in with Okta Button */}
        <button
          onClick={handleLogin}
          className="w-full p-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900"
        >
          Sign in with Okta
        </button>
      </div>
    </div>
  );
}
