import React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle,
  AlertCircle,
  Clock,
  PenTool as Tool,
} from "lucide-react";

interface NotificationItemProps {
  type: "success" | "warning" | "info" | "repair";
  title: string;
  message: string;
  time: string;
  isNew?: boolean;
}

// Updated icon map with more appropriate icons based on the image
const iconMap = {
  success: CheckCircle,
  warning: AlertCircle,
  info: Bell,
  repair: Tool,
};

// Updated color map to match the image's color scheme
const bgColorMap = {
  success: "bg-green-100",
  warning: "bg-yellow-100",
  info: "bg-blue-100",
  repair: "bg-violet-100",
};

// Added separate text color map for better customization
const textColorMap = {
  success: "text-green-600",
  warning: "text-yellow-600",
  info: "text-blue-600",
  repair: "text-violet-600",
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  title,
  message,
  time,
  isNew,
}) => {
  const Icon = iconMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 mb-3 shadow-sm relative"
    >
      {isNew && (
        <div className="absolute top-4 right-4 w-2 h-2 bg-violet-500 rounded-full" />
      )}

      <div className="flex">
        {/* Icon container - taller and with more specific styling */}
        <div className={`flex-shrink-0 w-12 h-full mr-3 flex items-start`}>
          <div
            className={`${bgColorMap[type]} w-12 h-24 rounded-lg flex items-center justify-center`}
          >
            <Icon size={24} className={textColorMap[type]} />
          </div>
        </div>

        {/* Content container */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{message}</p>
          <div className="flex items-center gap-1 mt-2">
            <Clock size={14} className="text-gray-400" />
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

