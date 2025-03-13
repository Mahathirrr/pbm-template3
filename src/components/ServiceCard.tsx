import React from 'react';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  vaccinated?: boolean;
  onBook: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  rating,
  reviews,
  imageUrl,
  vaccinated,
  onBook
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-start gap-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">
              {name}
              {vaccinated && (
                <span className="ml-2 text-sm text-green-600">(Vaccinated)</span>
              )}
            </h3>
          </div>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {rating.toFixed(1)} ({reviews} reviews)
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        </div>
      </div>
      <button
        onClick={onBook}
        className="w-full mt-4 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
}