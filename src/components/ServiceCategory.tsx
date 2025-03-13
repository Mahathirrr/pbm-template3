import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCategoryProps {
  icon: LucideIcon;
  name: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  icon: Icon,
  name,
  isSelected,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-3 rounded-xl transition-all ${
        isSelected 
          ? 'bg-violet-100 text-violet-600' 
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
      }`}
    >
      <div className={`p-3 rounded-full mb-2 ${
        isSelected ? 'bg-violet-200' : 'bg-white'
      }`}>
        <Icon size={24} />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
}