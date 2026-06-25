import { Link, useNavigate } from "react-router";
import { LuDumbbell } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name:"",
    email: "",
    password: "",
    confirmpassword:""
  });

 const handleSignup = (e) => {
  e.preventDefault();

  let newErrors = {};

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name Validation
  if (!name.trim()) {
    newErrors.name = "Name is required";
  } else if (name.trim().length < 3) {
    newErrors.name =
      "Name must be at least 3 characters";
  }

  // Email Validation
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailPattern.test(email)) {
    newErrors.email = "Enter a valid email";
  }

  // Password Validation
  if (!password.trim()) {
    newErrors.password = "Password is required";
  } else if (password.length < 6) {
    newErrors.password =
      "Password must be at least 6 characters";
  }

  // Confirm Password Validation
  if (!confirmpassword.trim()) {
    newErrors.confirmPassword =
      "Confirm Password is required";
  } else if (password !== confirmpassword) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  // Check Existing User
  const existingUser = JSON.parse(
    localStorage.getItem("user")
  );

  if (
    existingUser &&
    existingUser.email === email
  ) {
    newErrors.email =
      "Email already registered";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0)
    return;

  // Save User
  const userData = {
    name,
    email,
    password,
  };

  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  alert("Signup Successful");

  navigate("/login");
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-indigo-50 px-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-4">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl">
            <LuDumbbell />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-slate-900 mt-4">
         Join the community
        </h1>

        <p className="text-center text-gray-500 text-sm mt-1">
         Create your account to start your fitness journey
        </p>

        {/* Social Login */}
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

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-2 text-xs text-gray-500 uppercase">
            Or Continue With Email
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form className="space-y-3"  onSubmit={handleSignup}>
           <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>

            <input
              type="name"
              placeholder="John Deo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg px-3 py-3  focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg px-3 py-3  focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Password</label>

             
            </div>

            <input
              type="password"
              placeholder="Create a Strong Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg px-3 py-3 focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

            <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Confirm Password</label>

             
            </div>

            <input
              type="password"
              placeholder="Re-enter your Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg px-3 py-3 focus:outline-none text-sm focus:ring-2 focus:ring-orange-400"
            />

            {errors.confirmpassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmpassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-6">
         Already have an account? {" "}
          <Link
            to="/"
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
