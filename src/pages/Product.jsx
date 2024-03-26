/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';


const Product = () => {
  const [products, setProducts] = useState([
    // Example products (currencies)
    {
      id: 1,
      name: 'Bitcoin',
      price: '40,000',
      description: 'A decentralized digital currency',
      image: '../assets/Bitcoin.webp',
    },
    // ... other products
  ]);
  return (
    <section className="bg-gray-100 h-full">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold pt-5 pb-3">Product List</h3>
      <div className="rounded-md shadow-md p-4 w-[100%] h-[100%] bg-white">
      <div className="container mx-auto p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-700">Manage Products</h1>
      </div>
      <div className="flex justify-end mb-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300">
          Add New Product
        </button>
      </div>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.description}</td>
                <td className="border px-4 py-2">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded" />
                </td>
                <td className="border px-4 py-2 flex justify-center">
                  <button className="flex items-center justify-center px-2 py-1 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition duration-300 mr-2">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="flex items-center justify-center px-2 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 transition duration-300">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
  </section>
  )
}

export default Product