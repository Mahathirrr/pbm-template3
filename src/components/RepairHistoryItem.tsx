import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface RepairHistoryItemProps {
  deviceName: string;
  serviceName: string;
  date: string;
  location: string;
  status: 'completed' | 'cancelled' | 'in-progress';
  cost: string;
}

const statusStyles = {
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700',
  'in-progress': 'bg-blue-100 text-blue-700',
};

export const RepairHistoryItem: React.FC<RepairHistoryItemProps> = ({
  deviceName,
  serviceName,
  date,
  location,
  status,
  cost,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{deviceName}</h3>
          <p className="text-sm text-gray-600">{serviceName}</p>
        </div>
        <span className="text-sm font-semibold text-violet-600">{cost}</span>
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <button className="text-sm text-violet-600 font-medium hover:text-violet-700">
          View Details
        </button>
      </div>
    </motion.div>
  );
};