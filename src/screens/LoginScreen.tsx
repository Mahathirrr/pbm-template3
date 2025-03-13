import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, LockKeyhole, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Logo } from "../components/Logo";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/welcome")}
        className="mb-8 p-2 -ml-2 text-gray-600 hover:text-gray-900 flex items-center"
      >
        <ArrowLeft size={20} />
        <span className="ml-1">Back</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <Logo size={48} className="text-violet-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Sign in to continue with ElektroniCare</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <Mail size={20} />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <LockKeyhole size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-3 px-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              type="button"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-sm text-violet-600 hover:text-violet-700">
            Forgot password?
          </button>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-violet-600 text-white font-medium rounded-md shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          onClick={() => navigate("/dashboard")}
        >
          Sign In
        </motion.button>

        <p className="text-center text-gray-600 pt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-violet-600 font-semibold hover:text-violet-700"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginScreen;
