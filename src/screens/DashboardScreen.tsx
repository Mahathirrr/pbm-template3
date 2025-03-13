import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Tv,
  Airplay,
  Search,
  Bell,
  User,
  History,
  Wrench,
  Printer,
  Zap,
  MonitorSmartphone,
} from "lucide-react";
import { Logo } from "../components/Logo";
import { NotificationItem } from "../components/NotificationItem";
import { RepairHistoryItem } from "../components/RepairHistoryItem";
import { BottomNavigation } from "../components/BottomNavigation";

const DashboardScreen = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: Smartphone, name: "Phones" },
    { icon: Laptop, name: "Laptops" },
    { icon: Tv, name: "TVs" },
    { icon: Airplay, name: "AC" },
    { icon: Printer, name: "Printers" },
    { icon: Zap, name: "Electrical" },
    { icon: MonitorSmartphone, name: "Tablets" },
    { icon: Wrench, name: "Appliances" },
  ];

  const recentRepairs = [
    {
      deviceName: "iPhone 13",
      serviceName: "Screen Replacement",
      date: "March 15, 2025",
      location: "Fresh Teknik Service Center",
      status: "completed" as const,
      cost: "Rp750,000",
    },
    {
      deviceName: "MacBook Pro",
      serviceName: "Battery Service",
      date: "March 10, 2025",
      location: "Tech Solutions",
      status: "in-progress" as const,
      cost: "Rp1,200,000",
    },
  ];

  const recentNotifications = [
    {
      type: "repair" as const,
      title: "Repair Status Update",
      message: "Your iPhone 13 screen replacement is now complete",
      time: "2 hours ago",
      isNew: true,
    },
    {
      type: "info" as const,
      title: "Special Offer",
      message: "Get 20% off on all laptop repairs this week",
      time: "5 hours ago",
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-violet-600 p-6 pb-24">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Logo size={24} className="text-violet-600" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">ElektroniCare</h1>
              <p className="text-violet-100">Welcome back, Alex!</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/notifications')}
              className="relative p-2 text-white hover:bg-violet-500 rounded-lg transition-colors"
            >
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={() => navigate('/settings')}
              className="p-2 text-white hover:bg-violet-500 rounded-lg transition-colors"
            >
              <User size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for repair services..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-violet-200 border border-violet-400/20 focus:outline-none focus:bg-white/20"
          />
        </div>
      </div>

      <div className="px-6 -mt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <h2 className="text-lg font-semibold mb-4 text-gray-900">Categories</h2>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate('/services')}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                  {React.createElement(category.icon, { size: 24 })}
                </div>
                <span className="text-xs text-gray-600">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Repairs</h2>
            <button 
              onClick={() => navigate('/history')}
              className="text-violet-600 flex items-center gap-1 hover:text-violet-700"
            >
              <History size={16} />
              <span className="text-sm font-medium">View All</span>
            </button>
          </div>
          <div className="space-y-4">
            {recentRepairs.map((repair, index) => (
              <RepairHistoryItem key={index} {...repair} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            <button 
              onClick={() => navigate('/notifications')}
              className="text-violet-600 flex items-center gap-1 hover:text-violet-700"
            >
              <span className="text-sm font-medium">View All</span>
            </button>
          </div>
          <div className="space-y-4">
            {recentNotifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default DashboardScreen;