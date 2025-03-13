import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, Lock, Bell, Shield, Languages as Language } from 'lucide-react';
import { ConfirmDialog } from '../components/ConfirmDialog';

const AccountSettingsScreen = () => {
  const navigate = useNavigate();
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Alex Wong',
    email: 'alex.wong@example.com',
    phone: '+62 812 3456 7890',
    language: 'English',
  });

  const handleSignOut = () => {
    setShowSignOutDialog(false);
    navigate('/welcome');
  };

  const settingsOptions = [
    {
      icon: Lock,
      title: 'Security',
      description: 'Password, PIN, biometric',
      onClick: () => {},
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Customize notification preferences',
      onClick: () => {},
    },
    {
      icon: Shield,
      title: 'Privacy',
      description: 'Manage your data and permissions',
      onClick: () => {},
    },
    {
      icon: Language,
      title: 'Language',
      description: 'Change app language',
      onClick: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-violet-600 p-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/settings')}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-white">Account Settings</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-8 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-violet-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-semibold text-violet-600">
                {formData.fullName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <button className="absolute bottom-0 right-0 bg-violet-600 text-white p-2 rounded-full">
              <Camera size={16} />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">{formData.fullName}</h2>
          <p className="text-gray-600">{formData.email}</p>
        </div>

        <div className="space-y-4 mb-8">
          {settingsOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="w-full flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
            >
              <div className="p-2 bg-violet-100 rounded-lg">
                {React.createElement(option.icon, { size: 20, className: 'text-violet-600' })}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-gray-900">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
              <ChevronLeft size={20} className="text-gray-400 rotate-180" />
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowSignOutDialog(true)}
          className="w-full py-3 bg-red-100 text-red-600 rounded-xl font-medium hover:bg-red-200 transition-colors"
        >
          Sign Out
        </button>
      </div>

      <ConfirmDialog
        isOpen={showSignOutDialog}
        title="Sign Out"
        message="Are you sure you want to sign out of your account?"
        onConfirm={handleSignOut}
        onCancel={() => setShowSignOutDialog(false)}
      />
    </div>
  );
};

export default AccountSettingsScreen;