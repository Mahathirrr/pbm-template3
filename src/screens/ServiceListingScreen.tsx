import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Smartphone, 
  Laptop, 
  Tv, 
  Headphones, 
  Search,
  Bell,
  ChevronLeft
} from 'lucide-react';
import { ServiceCategory } from '../components/ServiceCategory';
import { ServiceCard } from '../components/ServiceCard';
import { Logo } from '../components/Logo';

const categories = [
  { icon: Smartphone, name: 'Phones' },
  { icon: Laptop, name: 'Laptops' },
  { icon: Tv, name: 'TVs' },
  { icon: Headphones, name: 'Audio' },
];

const services = [
  {
    id: 1,
    name: 'Fresh Teknik',
    description: 'Expert phone and laptop repairs with genuine parts. Fast and reliable service.',
    rating: 5.0,
    reviews: 344,
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=60',
    vaccinated: true,
  },
  {
    id: 2,
    name: 'Tech Solutions',
    description: 'Professional electronic repair service with 5 years of experience.',
    rating: 4.8,
    reviews: 256,
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=60',
  },
];

const ServiceListingScreen = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Phones');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-violet-600 p-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-4">
            <button className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors">
              <Bell size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Logo size={24} className="text-violet-600" />
          </div>
          <h1 className="text-2xl font-bold text-white">Find Services</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for repair services..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-violet-200 border border-violet-400/20 focus:outline-none focus:bg-white/20"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 -mt-20">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category) => (
              <ServiceCategory
                key={category.name}
                icon={category.icon}
                name={category.name}
                isSelected={selectedCategory === category.name}
                onClick={() => setSelectedCategory(category.name)}
              />
            ))}
          </div>
        </div>

        {/* Service Listings */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Available Services</h2>
            <span className="text-sm text-gray-500">
              {services.length} services found
            </span>
          </div>
          
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onBook={() => navigate(`/service/${service.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceListingScreen;