import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MessageCircle, Phone, Mail, FileText, HelpCircle, ChevronRight } from 'lucide-react';

const HelpSupportScreen = () => {
  const navigate = useNavigate();

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: () => {/* Handle live chat */},
    },
    {
      icon: Phone,
      title: 'Call Center',
      description: 'Call us at +62 812 3456 7890',
      action: () => {/* Handle phone call */},
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@elektronicare.com',
      action: () => {/* Handle email */},
    },
    {
      icon: FileText,
      title: 'FAQs',
      description: 'Find answers to common questions',
      action: () => {/* Navigate to FAQs */},
    },
    {
      icon: HelpCircle,
      title: 'Submit a Ticket',
      description: 'Create a support ticket',
      action: () => {/* Handle ticket creation */},
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
          <h1 className="text-xl font-semibold text-white">Help & Support</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">How can we help you?</h2>

          <div className="space-y-4">
            {supportOptions.map((option, index) => (
              <button
                key={index}
                onClick={option.action}
                className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="p-2 bg-violet-100 rounded-lg">
                  {React.createElement(option.icon, { size: 20, className: 'text-violet-600' })}
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium text-gray-900">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-violet-50 rounded-xl p-6">
          <h3 className="font-medium text-violet-900 mb-2">Operating Hours</h3>
          <p className="text-sm text-violet-700">
            Monday - Friday: 9:00 AM - 8:00 PM<br />
            Saturday: 9:00 AM - 6:00 PM<br />
            Sunday: 10:00 AM - 4:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportScreen;