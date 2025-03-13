import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Filter } from 'lucide-react';
import { NotificationItem } from '../components/NotificationItem';

const notifications = [
  {
    type: 'repair' as const,
    title: 'Repair Status Update',
    message: 'Your iPhone 13 screen replacement is now complete',
    time: '2 hours ago',
    isNew: true,
  },
  {
    type: 'info' as const,
    title: 'Special Offer',
    message: 'Get 20% off on all laptop repairs this week',
    time: '5 hours ago',
    isNew: true,
  },
  {
    type: 'success' as const,
    title: 'Payment Confirmed',
    message: 'Payment of Rp750,000 has been received',
    time: '1 day ago',
  },
  {
    type: 'warning' as const,
    title: 'Appointment Reminder',
    message: 'Your TV repair appointment is tomorrow at 10:00 AM',
    time: '1 day ago',
  },
  {
    type: 'repair' as const,
    title: 'New Technician Assigned',
    message: 'Expert technician John has been assigned to your AC repair',
    time: '2 days ago',
  },
  {
    type: 'info' as const,
    title: 'Rate Your Experience',
    message: 'How was your recent laptop repair experience?',
    time: '3 days ago',
  },
];

const NotificationsScreen = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const filteredNotifications = filter === 'all' 
    ? notifications
    : notifications.filter(n => n.type === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-violet-600 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-xl font-semibold text-white">Notifications</h1>
          </div>
          <button className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('repair')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'repair'
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Repairs
            </button>
            <button
              onClick={() => setFilter('info')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'info'
                  ? 'bg-violet-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Updates
            </button>
          </div>
          <button className="text-sm text-violet-600 font-medium">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification, index) => (
            <NotificationItem
              key={index}
              {...notification}
            />
          ))}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No notifications found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationsScreen;