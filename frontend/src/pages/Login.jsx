import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login response data:", data);

      if (data.success) {
        login(data.user);
        localStorage.setItem("token", data.token);

        const role = (data.user?.role || "user").toLowerCase();

        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else { 
        throw new Error(data.message || "Login failed");
      }

      setError("");
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-700 from-50% to-gray-200 to-50% space-y-6">
      <h2 className="text-3xl text-white font-semibold">Dashboard</h2>
      <div className="shadow-lg p-6 w-80 bg-white rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">

            <div className="flex justify-center space-x-2 items-center mb-4 ">
              <input type="radio" id="role1" name="role" value="Admin" className="cursor-pointer" />
                <label htmlFor="role1" className="cursor-pointer" > Admin</label><br />
              <input type="radio" id="role2" name="role" value="User" className="cursor-pointer" />
                <label htmlFor="role2" className="cursor-pointer"> User </label><br />

           </div>
            
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
          <div>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-teal-500 hover:text-teal-700">
                Register
              </a>
            </p>
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
