import React from "react";
import SearchSection from "../Component/SeacrhSection";
import ProCart from "../Component/ProCart";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";

function Buy() {
  // Static featured properties
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Green Villa, Uttar Pradesh",
      description:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
      title: "Green Villa, Uttar Pradesh",
      description:
        "Spacious 3BHK apartment in a prime location with modern amenities.",
      price: "$450,000",
    },
  ];

  return (
    <>
      {/* 🔎 Search Section */}
      <SearchSection />

    

      {/* 🌟 Featured Property Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E94]">
              Featured Property
            </h2>
            <button className="flex items-center gap-2 text-[#2C3E94] border border-[#2C3E94] px-4 py-2 rounded-full text-sm hover:bg-[#2C3E94] hover:text-white transition">
              See 268 New Projects ↗
            </button>
          </div>

          {/* Property Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Image (increased height to 450px) */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-[450px] object-cover"
                />

                {/* Card Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg p-4 m-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#2C3E94]" />
                      {property.title}
                    </h3>
                    <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-[#2C3E94]" />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">
                    {property.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{property.price}</span>
                    <button className="bg-[#2C3E94] text-white px-5 py-2 rounded-full text-sm hover:bg-[#1E2A70] transition">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Buy;
