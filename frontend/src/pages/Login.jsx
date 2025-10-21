import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message = data && data.message ? data.message : "Login failed";
        throw new Error(message);
      }

      console.log("Login successful:", data);
      setError("");
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed");
    }
  };

  return (
  <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 to-gray-200 space-y-6">
      <h2 className="text-3xl text-white font-semibold">Dashboard</h2>
      <div className="shadow-lg p-6 w-80 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded transition"
            >
              Login
            </button>
          </div>
          {error && (
            <div className="mt-3 text-center text-sm text-red-600">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
