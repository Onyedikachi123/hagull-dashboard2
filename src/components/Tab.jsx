/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// Import flag images (assuming you have these as SVGs or PNGs)
import NigeriaFlag from '../assets/nigerianflag.png';
// import SouthAfricaFlag from './flags/SouthAfrica.svg';
// ... import other flags

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Africa");

  const continents = {
    Africa: [
      { name: "Nigeria", currency: "₦", flag: NigeriaFlag },
    //   { name: "South Africa", currency: "R", flag: SouthAfricaFlag },
      // ... add other countries with their flags
    ],
    Europe: [
        {name: "United Kingdome", currency: ""}
    ]
    // ... add other continents
  };

  return (
    <div className="tabs-container w-full flex flex-col items-center">
      <div className="tab-headers flex justify-center gap-16 border-b-2 border-blue-600">
        {Object.keys(continents).map((continent) => (
          <div
            key={continent}
            className={`tab-header px-5 py-2.5 cursor-pointer transition duration-300 ${
              activeTab === continent ? "border-b-3 border-blue-600" : ""
            }`}
            onClick={() => setActiveTab(continent)}
          >
            {continent}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12">
        {continents[activeTab].map((country) => (
          <div key={country.name} className="text-center">
            <div className="flex  items-center border gap-2 px-5 py-5">
              <img src={country.flag} alt={`${country.name} Flag`} className="w-10 h-6 mb-2" />
              {country.currency}
              {/* <button className="mb-2 px-5 py-2.5 border-2 border-blue-600 text-blue-600 cursor-pointer transition duration-300 rounded-full bg-white text-3xl">
                {country.currency}
              </button> */}
              <p className="text-sm font-semibold">{country.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
