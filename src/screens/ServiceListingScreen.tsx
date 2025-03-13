import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Tv,
  Printer,
  Search,
  Bell,
  ChevronLeft,
  Star,
  MapPin,
  Clock,
  Shield,
  Filter,
  ThumbsUp,
  Calendar,
  Wallet,
  Award,
  MessageSquare,
  Phone,
} from "lucide-react";
import { ServiceCategory } from "../components/ServiceCategory";
import { ServiceCard } from "../components/ServiceCard";
import { Logo } from "../components/Logo";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    icon: Smartphone,
    name: "Phones",
    description: "Mobile phone repairs",
  },
  {
    icon: Laptop,
    name: "Laptops",
    description: "Laptop & computer repairs",
  },
  {
    icon: Tv,
    name: "TVs",
    description: "TV & display repairs",
  },
  {
    icon: Printer,
    name: "Printers",
    description: "Printer repairs",
  },
];

const services = {
  Phones: [
    {
      id: 1,
      name: "Fresh Teknik",
      description:
        "Expert phone repairs with genuine parts. Specializing in screen replacement, battery service, and water damage repair.",
      rating: 4.9,
      reviews: 344,
      imageUrl:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=60",
      location: "Jakarta Selatan",
      distance: "2.5 km",
      responseTime: "< 15 mins",
      experience: "5+ years",
      specialties: ["Screen Repair", "Battery Service", "Water Damage"],
      certifications: ["Apple Certified", "Samsung Authorized"],
      availability: "Available Today",
      completedJobs: 1500,
      priceRange: "Rp 200K - 2M",
      warranty: "90 days",
      satisfaction: 98,
      emergencyService: true,
      paymentMethods: ["Cash", "Credit Card", "Bank Transfer", "E-Wallet"],
      workingHours: "08:00 - 20:00",
      insurance: true,
      onlineConsultation: true,
      homeService: true,
      testimonials: [
        {
          name: "John D.",
          rating: 5,
          comment:
            "Excellent service, fixed my iPhone screen in under an hour!",
        },
      ],
    },
    {
      id: 2,
      name: "Mobile Care Pro",
      description:
        "Professional smartphone repair service. Fast and reliable with warranty on all repairs.",
      rating: 4.8,
      reviews: 256,
      imageUrl:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=60",
      location: "Jakarta Pusat",
      distance: "3.8 km",
      responseTime: "< 30 mins",
      experience: "3+ years",
      specialties: ["iPhone Repair", "Android Repair", "Data Recovery"],
      certifications: ["Google Certified"],
      availability: "Available Tomorrow",
      completedJobs: 890,
      priceRange: "Rp 150K - 1.5M",
      warranty: "60 days",
      satisfaction: 95,
      emergencyService: true,
      paymentMethods: ["Cash", "Credit Card", "E-Wallet"],
      workingHours: "09:00 - 21:00",
      insurance: true,
      onlineConsultation: true,
      homeService: true,
      testimonials: [
        {
          name: "Sarah M.",
          rating: 5,
          comment: "Very professional and quick service!",
        },
      ],
    },
  ],
  Laptops: [
    {
      id: 3,
      name: "Laptop Solutions",
      description:
        "Expert laptop repair service. Hardware & software solutions with genuine parts.",
      rating: 4.7,
      reviews: 189,
      imageUrl:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=60",
      location: "Jakarta Barat",
      distance: "4.2 km",
      responseTime: "< 1 hour",
      experience: "7+ years",
      specialties: ["Hardware Repair", "OS Installation", "Data Recovery"],
      certifications: ["Microsoft Certified", "Apple Certified"],
      availability: "Available Today",
      completedJobs: 2100,
      priceRange: "Rp 250K - 3M",
    },
  ],
  TVs: [
    {
      id: 4,
      name: "TV Care Express",
      description:
        "Professional TV repair and installation service. All brands supported.",
      rating: 4.6,
      reviews: 145,
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
      location: "Jakarta Timur",
      distance: "5.1 km",
      responseTime: "< 2 hours",
      experience: "4+ years",
      specialties: ["Panel Repair", "Installation", "Smart TV Setup"],
      certifications: ["LG Authorized", "Samsung Certified"],
      availability: "Available Today",
      completedJobs: 780,
      priceRange: "Rp 300K - 5M",
    },
  ],
  Printers: [
    {
      id: 5,
      name: "PrinterPro Service",
      description:
        "Specialized printer repair and maintenance service. All major brands.",
      rating: 4.8,
      reviews: 98,
      imageUrl:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop&q=60",
      location: "Jakarta Utara",
      distance: "6.3 km",
      responseTime: "< 45 mins",
      experience: "6+ years",
      specialties: ["Printer Repair", "Maintenance", "Network Setup"],
      certifications: ["HP Certified", "Epson Authorized"],
      availability: "Available Today",
      completedJobs: 560,
      priceRange: "Rp 150K - 1M",
    },
  ],
};

const ServiceListingScreen = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Phones");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [filterOptions, setFilterOptions] = useState({
    priceRange: "all",
    rating: "all",
    distance: "all",
    homeService: false,
    emergencyService: false,
    onlineConsultation: false,
  });

  const filteredServices =
    services[selectedCategory as keyof typeof services]?.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        (filterOptions.homeService ? service.homeService : true) &&
        (filterOptions.emergencyService ? service.emergencyService : true) &&
        (filterOptions.onlineConsultation ? service.onlineConsultation : true);

      return matchesSearch && matchesFilters;
    }) || [];

  const handleQuickBook = (serviceId: number) => {
    navigate(`/service/${serviceId}/quick-book`);
  };

  const handleChat = (serviceId: number) => {
    navigate(`/chat/${serviceId}`);
  };

  const handleCall = (serviceId: number) => {};

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-violet-600 p-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors relative"
            >
              <Filter size={24} />
              {showFilters && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => navigate("/notifications")}
              className="text-white p-2 hover:bg-violet-500 rounded-lg transition-colors"
            >
              <Bell size={24} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Logo size={24} className="text-violet-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Find Services</h1>
            <p className="text-violet-200 text-sm">
              Expert technicians near you
            </p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for repair services..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-violet-200 border border-violet-400/20 focus:outline-none focus:bg-white/20"
          />
        </div>
      </div>

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

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-xl p-6 mb-6 shadow-sm"
            >
              <h3 className="font-semibold mb-4">Filter Options</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        setFilterOptions((prev) => ({
                          ...prev,
                          homeService: !prev.homeService,
                        }))
                      }
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterOptions.homeService
                          ? "bg-violet-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      Home Service
                    </button>
                    <button
                      onClick={() =>
                        setFilterOptions((prev) => ({
                          ...prev,
                          emergencyService: !prev.emergencyService,
                        }))
                      }
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterOptions.emergencyService
                          ? "bg-violet-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      Emergency Service
                    </button>
                    <button
                      onClick={() =>
                        setFilterOptions((prev) => ({
                          ...prev,
                          onlineConsultation: !prev.onlineConsultation,
                        }))
                      }
                      className={`px-3 py-1 rounded-full text-sm ${
                        filterOptions.onlineConsultation
                          ? "bg-violet-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      Online Consultation
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Price Range
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    value={filterOptions.priceRange}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        priceRange: e.target.value,
                      }))
                    }
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under Rp 500K</option>
                    <option value="mid">Rp 500K - 1M</option>
                    <option value="high">Above Rp 1M</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Available Technicians
              </h2>
              <p className="text-sm text-gray-500">
                {filteredServices.length} technicians found
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border-none bg-transparent text-violet-600 font-medium focus:outline-none">
                <option>Rating</option>
                <option>Distance</option>
                <option>Price</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center text-yellow-400">
                            <Star size={16} className="fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {service.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-600">
                            {service.reviews} reviews
                          </span>
                          {service.satisfaction && (
                            <>
                              <span className="text-sm text-gray-400">•</span>
                              <span className="text-sm text-gray-600">
                                <ThumbsUp size={14} className="inline mr-1" />
                                {service.satisfaction}% satisfaction
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-medium text-violet-600">
                          {service.availability}
                        </span>
                        {service.workingHours && (
                          <span className="text-xs text-gray-500">
                            {service.workingHours}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{service.location}</span>
                        <span className="text-gray-400">•</span>
                        <span>{service.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={14} />
                        <span>Response time: {service.responseTime}</span>
                        {service.warranty && (
                          <>
                            <span className="text-gray-400">•</span>
                            <Calendar size={14} />
                            <span>Warranty: {service.warranty}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield size={14} />
                        <span>{service.experience} experience</span>
                        <span className="text-gray-400">•</span>
                        <span>{service.completedJobs}+ jobs</span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-violet-50 text-violet-600 text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {service.emergencyService && (
                      <div className="mt-2">
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                          24/7 Emergency Service Available
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-sm text-gray-500">
                        Starting from
                      </span>
                      <p className="font-semibold text-gray-900">
                        {service.priceRange}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCall(service.id)}
                        className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                      >
                        <Phone size={20} />
                      </button>
                      <button
                        onClick={() => handleChat(service.id)}
                        className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                      >
                        <MessageSquare size={20} />
                      </button>
                      <button
                        onClick={() => navigate(`/service/${service.id}`)}
                        className="px-4 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleQuickBook(service.id)}
                        className="px-4 py-2 bg-violet-100 text-violet-600 font-medium rounded-lg hover:bg-violet-200 transition-colors"
                      >
                        Quick Book
                      </button>
                    </div>
                  </div>

                  {service.paymentMethods && (
                    <div className="flex items-center gap-2">
                      <Wallet size={14} className="text-gray-400" />
                      <div className="flex gap-2">
                        {service.paymentMethods.map((method, index) => (
                          <span key={index} className="text-xs text-gray-500">
                            {method}
                            {index < service.paymentMethods.length - 1
                              ? ","
                              : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {service.testimonials && service.testimonials.length > 0 && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-violet-600">
                            {service.testimonials[0].name[0]}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">
                            {service.testimonials[0].name}
                          </span>
                          <div className="flex items-center text-yellow-400">
                            <Star size={12} className="fill-current" />
                            <span className="ml-1 text-xs text-gray-600">
                              {service.testimonials[0].rating}.0
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {service.testimonials[0].comment}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No services found for your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceListingScreen;

