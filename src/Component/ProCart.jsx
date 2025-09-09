import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

function ProCart({ limit }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.error("Error fetching properties:", err);
      });
  }, []);

  return (
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

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Only take "limit" number of properties (or all if no limit) */}
          {properties.slice(0, limit || properties.length).map((property) => (
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
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaMapMarkerAlt className="text-gray-400" />
                  {property.city}, {property.state}, {property.country}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {property.name}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaUser className="text-gray-400" />
                  {property.ownerName}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    📞 {property.contactNumber}
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
  );
}

export default ProCart;
