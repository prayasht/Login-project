import { useOktaAuth } from "@okta/okta-react";

export default function Dashboard() {
  const { authState, oktaAuth } = useOktaAuth();

  if (!authState || !authState.isAuthenticated) {
    return <p>Loading...</p>;
  }

  const logout = async () => {
    oktaAuth.signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
      <button
        onClick={logout}
        className="px-6 py-3 mt-4 text-white bg-red-500 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
