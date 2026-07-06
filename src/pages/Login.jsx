import { useNavigate, Link } from "react-router";
import { LuDumbbell } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { loginUser } from "../services/authApi";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", });

const handleLogin = async (e) => {
  e.preventDefault();

  let newErrors = {};

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailPattern.test(email)) {
    newErrors.email = "Enter a valid email";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password =
      "Password must be at least 6 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0)
    return;

  try {
    const user = await loginUser(
      email,
      password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    // Store logged in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "username",
      user.name
    );

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    alert("Unable to login. Please try again.");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-indigo-50 px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-4">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl">
            <LuDumbbell />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-900 mt-4">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 text-sm mt-1">
          Sign in to continue your fitness journey
        </p>
        <div className="mt-4 space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium text-sm hover:bg-emerald-500 hover:text-white transition">
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium text-sm hover:bg-emerald-500 hover:text-white transition">
            <FaApple size={22} />
            Continue with Apple
          </button>
        </div>


        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-2 text-xs text-gray-500 uppercase">
            Or Continue With Email
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        <form className="space-y-3" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-3 py-3 focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Password</label>

              <a href="#" className="text-orange-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg px-3 py-3 focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>


        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-semibold hover:underline cursor-pointer" >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;