/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Table = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDays, setFilterDays] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterDays(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchCondition = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const filterCondition = filterDays ? item.days <= filterDays : true;
    return searchCondition && filterCondition;
  });

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by currency name"
          className="p-2 border border-gray-300 rounded"
          onChange={handleSearch}
        />
        <select
          className="p-2 ml-2 border border-gray-300 rounded"
          onChange={handleFilter}
        >
          <option value="">Filter by days</option>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Currency</th>
              <th className="py-3 px-6 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                <td className="py-3 px-6 text-left">{item.name}</td>
                <td className="py-3 px-6 text-left">{item.currency}</td>
                <td className="py-3 px-6 text-left">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
