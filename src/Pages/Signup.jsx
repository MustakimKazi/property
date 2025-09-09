import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import signupImage from "../assets/signup.png"; // ✅ Import local image

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navbar */}
      <div className="flex justify-between items-center border-b px-6 py-3">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border rounded-full text-sm flex items-center gap-2 hover:bg-gray-100"
        >
          ⬅ Back to Homepage
        </button>
        <h1 className="text-xl font-bold text-gray-800">🏠 PropBot</h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
          About Us
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Left Form Section */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Create new account
            </h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex items-center border rounded px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Id"
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border rounded px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="flex items-center border rounded px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  onChange={handleChange}
                  className="w-full outline-none"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-800 transition"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block flex-1">
          <img
            src={signupImage} // ✅ use imported image
            alt="Modern House"
            className="h-full w-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
