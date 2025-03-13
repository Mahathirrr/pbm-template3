import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, PenTool as Tools, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 flex flex-col">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12 mt-8"
      >
        <div className="flex justify-center mb-6">
          <Logo size={48} className="text-violet-600" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          Welcome to ElektroniCare
        </h1>
        <p className="text-gray-600">
          Your trusted partner in electronic repairs
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { icon: Shield, title: "Expert Technicians" },
          { icon: Clock, title: "Fast Service" },
          { icon: Tools, title: "Genuine Parts" },
          { icon: Award, title: "Warranty" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 p-4 rounded-xl text-center"
          >
            <div className="bg-violet-600 text-white p-3 rounded-xl w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              {React.createElement(item.icon, { size: 24 })}
            </div>
            <h3 className="text-sm font-semibold text-gray-900">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto space-y-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/signup")}
          className="primary-button"
        >
          Create Account
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/login")}
          className="secondary-button"
        >
          Sign In
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

