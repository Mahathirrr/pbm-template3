import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { RepairHistoryItem } from '../components/RepairHistoryItem';
import { BottomNavigation } from '../components/BottomNavigation';

const repairHistory = {
  thisWeek: [
    {
      deviceName: 'iPhone 13',
      serviceName: 'Screen Replacement',
      date: 'March 15, 2025',
      location: 'Fresh Teknik Service Center',
      status: 'completed' as const,
      cost: 'Rp750,000',
    },
    {
      deviceName: 'MacBook Pro',
      serviceName: 'Battery Service',
      date: 'March 14, 2025',
      location: 'Tech Solutions',
      status: 'in-progress' as const,
      cost: 'Rp1,200,000',
    },
  ],
  lastWeek: [
    {
      deviceName: 'Samsung TV',
      serviceName: 'Panel Repair',
      date: 'March 8, 2025',
      location: 'ElektroniCare Center',
      status: 'completed' as const,
      cost: 'Rp2,500,000',
    },
  ],
  lastMonth: [
    {
      deviceName: 'iPad Pro',
      serviceName: 'Battery Replacement',
      date: 'February 25, 2025',
      location: 'iCare Service',
      status: 'completed' as const,
      cost: 'Rp900,000',
    },
    {
      deviceName: 'Printer HP',
      serviceName: 'Maintenance',
      date: 'February 20, 2025',
      location: 'PrinterPro',
      status: 'cancelled' as const,
      cost: 'Rp350,000',
    },
  ],
};

const HistoryScreen = () => {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState<'all' | 'thisWeek' | 'lastWeek' | 'lastMonth'>('all');

  const getFilteredHistory = () => {
    if (timeFilter === 'all') {
      return [
        ...repairHistory.thisWeek,
        ...repairHistory.lastWeek,
        ...repairHistory.lastMonth,
      ];
    }
    return repairHistory[timeFilter] || [];
  };

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
          <h1 className="text-xl font-semibold text-white">Repair History</h1>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setTimeFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              timeFilter === 'all'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Time
          </button>
          <button
            onClick={() => setTimeFilter('thisWeek')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              timeFilter === 'thisWeek'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setTimeFilter('lastWeek')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              timeFilter === 'lastWeek'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Last Week
          </button>
          <button
            onClick={() => setTimeFilter('lastMonth')}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              timeFilter === 'lastMonth'
                ? 'bg-violet-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Last Month
          </button>
        </div>

        <div className="space-y-4">
          {getFilteredHistory().map((repair, index) => (
            <RepairHistoryItem
              key={index}
              {...repair}
            />
          ))}
          
          {getFilteredHistory().length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No repair history found</p>
            </div>
          )}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default HistoryScreen;