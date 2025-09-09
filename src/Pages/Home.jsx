import React, { useState, useEffect } from "react";
import SearchSection from "../Component/SeacrhSection";
import {
  FaChartBar,
  FaKey,
  FaRobot,
  FaLock,
  FaMapMarkerAlt,
  FaStar,
  FaUser,
   FaMoneyBillWave, FaUserShield,
} from "react-icons/fa";
import axios from "axios";

function Home() {
  const services = [
    {
      icon: <FaChartBar size={40} className="text-[#2C3E94]" />,
      title: "Buy & Sell Properties",
      description: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <FaKey size={40} className="text-[#2C3E94]" />,
      title: "Find Rental Homes",
      description: "Browse through thousands of rental options suited to your needs",
    },
    {
      icon: <FaRobot size={40} className="text-[#2C3E94]" />,
      title: "Smart AI Property Search",
      description: "Get instant recommendations based on your budget & location",
    },
    {
      icon: <FaLock size={40} className="text-[#2C3E94]" />,
      title: "Safe & Secure Transactions",
      description: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];

  const [properties, setProperties] = useState([]);

  // Fetch API data
  useEffect(() => {
    axios
      .get("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => setProperties(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

   const [formData, setFormData] = useState({
    name: "",
    userType: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Welcome ${formData.name}! 🎉`);
  };

  return (
    <>
      {/* Search Section */}
      <div className="search" style={{ height: "500px", backgroundColor: "#f8f9fa" }}>
        <SearchSection />
      </div>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E94] mb-2">
            What We Do?
          </h2>
          <p className="text-gray-600 mb-10">
            Helping you find, buy, and rent the perfect property with ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-sm hover:shadow-md transition rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



          <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Featured Property</h2>
        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
          See 268 New Projects →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Big Image Left */}
        {properties[0] && (
          <div className="relative col-span-2">
            <img
              src={properties[0].image}
              alt={properties[0].name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm">By Finder & Projects</p>
              <h3 className="text-lg font-bold">{properties[0].name}</h3>
            </div>
          </div>
        )}

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          {properties[1] && (
            <div className="relative">
              <img
                src={properties[1].image}
                alt={properties[1].name}
                className="w-full h-[190px] object-cover rounded-lg"
              />
              <span className="absolute bottom-3 left-3 bg-yellow-400 text-black px-2 py-1 text-sm rounded">
                {properties[1].ownerName}
              </span>
            </div>
          )}
          {properties[2] && (
            <div>
              <img
                src={properties[2].image}
                alt={properties[2].name}
                className="w-full h-[190px] object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {properties[3] && (
            <img
              src={properties[3].image}
              alt={properties[3].name}
              className="w-full h-[190px] object-cover rounded-lg"
            />
          )}
          {properties[4] && (
            <img
              src={properties[4].image}
              alt={properties[4].name}
              className="w-full h-[190px] object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </section>

      {/* Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E94]">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600">
                Browse our top-rated properties for sale, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-[#2C3E94] text-white px-6 py-2 rounded-full text-sm shadow hover:bg-[#1E2A70] transition">
              View More Properties
            </button>
          </div>

          {/* Property Cards (only first 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties.slice(6, 10).map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                {/* Property Image */}
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
                <div className="p-4">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FaMapMarkerAlt className="text-gray-400" />
                    {property.city}, {property.state}, {property.country}
                  </div>

                  {/* Property Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {property.name}
                  </h3>

                  {/* Owner */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FaUser className="text-gray-400" />
                    {property.ownerName}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-400 mb-2">
                    <FaStar />
                    <span className="ml-1 text-gray-600 text-sm">4.5/5</span>
                  </div>

                  {/* Price + Contact */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2C3E94]">
                      ${Math.floor(Math.random() * 500000) + 100000}
                    </span>
                    <button className="bg-[#2C3E94] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1E2A70] transition">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Properties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E94]">
                Best Properties Available For Sale
              </h2>
              <p className="text-gray-600">
                Browse our top-rated properties for sale, featuring premium
                listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <button className="bg-[#2C3E94] text-white px-6 py-2 rounded-full text-sm shadow hover:bg-[#1E2A70] transition">
              View More Properties
            </button>
          </div>

          {/* Property Cards (only first 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties.slice(16,20 ).map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                {/* Property Image */}
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
                <div className="p-4">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FaMapMarkerAlt className="text-gray-400" />
                    {property.city}, {property.state}, {property.country}
                  </div>

                  {/* Property Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {property.name}
                  </h3>

                  {/* Owner */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FaUser className="text-gray-400" />
                    {property.ownerName}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-400 mb-2">
                    <FaStar />
                    <span className="ml-1 text-gray-600 text-sm">4.5/5</span>
                  </div>

                  {/* Price + Contact */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2C3E94]">
                      ${Math.floor(Math.random() * 500000) + 100000}
                    </span>
                    <button className="bg-[#2C3E94] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1E2A70] transition">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-600">
          Create a profile in seconds and find your ideal home.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 justify-center"
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* User Type Dropdown */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select User Type</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="agent">Agent</option>
        </select>

        {/* Location Input */}
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Your Location"
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-900 text-white px-8 py-2 rounded-full hover:bg-blue-800 transition"
        >
          Continue
        </button>
      </form>
    </section>


    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Left Side - Images */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
        {/* First Image */}
        <div className="w-96 h-[420px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="House 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlapping Image */}
        <div className="absolute bottom-[-40px] right-[-40px] w-96 h-[420px] overflow-hidden rounded-lg shadow-lg border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="House 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] leading-snug mb-10">
          We Provide Latest Properties <br /> For Our Valuable Clients
        </h2>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="text-[#1a237e] text-3xl">
              <FaMoneyBillWave />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[#1a237e]">
                Budget Friendly
              </h3>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="text-[#1a237e] text-3xl">
              <FaUserShield />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[#1a237e]">
                Trusted By Thousand
              </h3>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="text-[#1a237e] text-3xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[#1a237e]">
                Prime Location
              </h3>
              <p className="text-gray-600 text-base">
                Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean
                tempus. Lectus quis pretium varius iaculis sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;
