import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md"; // ✅ Property Icon
import loginImage from "../assets/signup.png"; // Replace with your image

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/"); // user comes from onAuthStateChanged in AuthContext
    } catch (err) {
      console.error(err);
      setError("Invalid email or password!");
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google login failed!");
    }
  };

  // ✅ Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Facebook login failed!");
    }
  };

  // ✅ Apple Login
  const handleAppleLogin = async () => {
    try {
      const provider = new OAuthProvider("apple.com");
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Apple login failed!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navbar */}
      <div className="flex justify-between items-center border-b px-6 py-4 shadow-sm">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border rounded-full text-sm flex items-center gap-2 hover:bg-gray-100 transition"
        >
          ⬅ Back to Homepage
        </button>

        {/* ✅ PropBot with House Icon */}
        <div className="flex items-center gap-2">
          <MdHomeWork className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-gray-800">PropBot</h1>
        </div>

        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow">
          About Us
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Left Form Section */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Log In</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full outline-none px-2"
                  required
                />
                <FaEnvelope className="text-gray-400 ml-2" />
              </div>

              {/* Password */}
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full outline-none px-2"
                  required
                />
                <FaLock className="text-gray-400 ml-2" />
              </div>

              {/* Remember me + Forgot password */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" /> Remember Me
                </label>
                <a href="/forgot-password" className="text-red-500 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-full text-lg font-medium hover:bg-blue-800 transition shadow-md"
              >
                Log In
              </button>
            </form>

            {/* OR line */}
            <div className="flex items-center my-6">
              <hr className="flex-1 border-gray-300" />
              <span className="px-4 text-gray-500 text-sm">OR CONTINUE WITH</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social login */}
            <div className="flex justify-center gap-8 text-3xl">
              <button
                onClick={handleAppleLogin}
                className="p-2 hover:scale-110 transition text-black"
              >
                <FaApple />
              </button>
              <button
                onClick={handleFacebookLogin}
                className="p-2 hover:scale-110 transition text-blue-600"
              >
                <FaFacebook />
              </button>
              <button
                onClick={handleGoogleLogin}
                className="p-2 hover:scale-110 transition text-red-500"
              >
                <FaGoogle />
              </button>
            </div>

            {/* Signup link */}
            <p className="mt-6 text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 font-medium">
                Create one
              </a>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block flex-1">
          <img
            src={loginImage}
            alt="Modern House"
            className="h-full w-full object-cover rounded-l-3xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
