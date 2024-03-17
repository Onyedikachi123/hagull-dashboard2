/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Table = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCurrency, setFilterCurrency] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterCurrency = (e) => {
    setFilterCurrency(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = data
    ? data.filter((item) => {
        const searchCondition = item.username.toLowerCase().includes(searchTerm.toLowerCase());
        const currencyCondition = filterCurrency ? item.currency === filterCurrency : true;
        return searchCondition && currencyCondition;
      })
    : [];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username"
          className="p-2 border border-gray-300 rounded-lg"
          onChange={handleSearch}
        />
        <select
          className="p-2 ml-2 border border-gray-300 rounded-lg"
          onChange={handleFilterCurrency}
        >
          <option value="">Filter by currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="Naira">Naira</option>
          <option value="Rand">Rand</option>
          <option value="ETH">ETH</option>
          <option value="XAF">XAF</option>
          <option value="XOF">XOF</option>
          <option value="DOGE">DOGE</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#1b97b2] text-white uppercase text-xs">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Currency</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-xs font-light">
            {currentRows.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-indigo-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {item.orderId}
                </td>
                <td className="py-3 px-6 text-left">{item.username}</td>
                <td className="py-3 px-6 text-left">{item.currency}</td>
                <td className="py-3 px-6 text-left">{item.amount}</td>
                <td className="py-3 px-6 text-left">{item.status}</td>
                <td className="py-3 px-6 text-left">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className="mx-1 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-indigo-600 hover:text-white"
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
