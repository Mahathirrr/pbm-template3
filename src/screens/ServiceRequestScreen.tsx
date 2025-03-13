import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft,
  Calendar,
  Clock,
  Camera,
  Upload,
  AlertCircle
} from 'lucide-react';

const ServiceRequestScreen = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-violet-600 p-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold text-white">Request Service</h1>
        </div>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Issue Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe the issue
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              placeholder="What seems to be the problem?"
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add photos of the issue
            </label>
            <div className="grid grid-cols-3 gap-4">
              <button
                type="button"
                className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 hover:border-violet-500 transition-colors"
              >
                <Camera className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Take Photo</span>
              </button>
              <button
                type="button"
                className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 hover:border-violet-500 transition-colors"
              >
                <Upload className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Upload</span>
              </button>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date & Time
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important Notice
                </h3>
                <p className="mt-2 text-sm text-yellow-700">
                  A service fee of Rp85,000 will be charged for inspection. This amount will be
                  deducted from the final service cost if you proceed with the repair.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-4 rounded-xl font-semibold shadow-sm hover:bg-violet-700 transition-all duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestScreen;