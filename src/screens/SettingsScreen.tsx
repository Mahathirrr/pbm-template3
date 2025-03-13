import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  User,
  Bell,
  Shield,
  CreditCard,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { BottomNavigation } from '../components/BottomNavigation';

const settingsItems = [
  {
    icon: User,
    title: 'Personal Information',
    description: 'Update your profile details',
    path: '/settings/personal',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Manage notification preferences',
    path: '/settings/notifications',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Password and security settings',
    path: '/settings/privacy',
  },
  {
    icon: CreditCard,
    title: 'Payment Methods',
    description: 'Manage your payment options',
    path: '/settings/payment',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    description: 'Get help with your repairs',
    path: '/settings/support',
  },
];

const SettingsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-violet-600 p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-white">Settings</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-violet-600">AW</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Alex Wong</h2>
              <p className="text-gray-600">alex.wong@example.com</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {settingsItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(item.path)}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:bg-gray-50 transition-colors"
            >
              <div className="p-2 rounded-full bg-violet-100 text-violet-600">
                {React.createElement(item.icon, { size: 20 })}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </motion.button>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default SettingsScreen;