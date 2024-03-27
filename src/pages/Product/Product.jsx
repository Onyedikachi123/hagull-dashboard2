import { useState, useEffect } from "react";
import { Edit2, Trash2 } from "lucide-react";
import ProductModal from "./ProductModal";

const Product = () => {
  const [products, setProducts] = useState(() => {
    // Get the products from localStorage or set an initial value
    const savedProducts = localStorage.getItem("products");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          {
            id: 1,
            name: "Bitcoin",
            amount: "$40,000",
            rate: "1,500",
            symbol: "$",
          },
          // ... other products
        ];
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page

  useEffect(() => {
    // Update localStorage whenever products change
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddNewProduct = () => {
    setCurrentProduct(null); // No product means adding a new one
    setModalOpen(true);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setModalOpen(true);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleSave = (product) => {
    let updatedProducts;
    if (product.id) {
      // Update existing product
      updatedProducts = products.map((p) =>
        p.id === product.id ? product : p
      );
    } else {
      // Add new product with a unique ID
      updatedProducts = [...products, { ...product, id: Date.now() }];
    }
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setModalOpen(false);
  };

  // Calculate the number of pages and the subset of products for the current page
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Change the current page
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-gray-100 h-full">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold pt-5 pb-3">Product List</h3>
        <div className="rounded-md shadow-md p-4 w-full h-full bg-white">
          <div className="container mx-auto p-6">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-700">
                Manage Products
              </h1>
            </div>
            <div className="flex justify-end mb-2">
              <button
                onClick={handleAddNewProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
              >
                Add New Product
              </button>
            </div>
            <div className="bg-white shadow-md rounded-md my-6 overflow-hidden">
              <table className="min-w-full table-auto">
                <thead className="bg-gray-200 text-gray-600">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Amount</th>
                    <th className="px-4 py-2">Rate</th>
                    <th className="px-4 py-2">Symbol</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="border px-4 py-2">{product.name}</td>
                      <td className="border px-4 py-2">{product.amount}</td>
                      <td className="border px-4 py-2">{product.rate}</td>
                      <td className="border px-4 py-2">{product.symbol}</td>
                      <td className="border px-4 py-2 flex justify-center">
                        <button
                          onClick={() => handleEdit(product)}
                          className="flex items-center justify-center px-2 py-1 bg-yellow-500 text-white                           rounded shadow hover:bg-yellow-600 transition duration-300 mr-2"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="flex items-center justify-center px-2 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 transition duration-300"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center px-4 py-3 bg-white ">
              <div>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, products.length)} of{" "}
                {products.length} Entries
              </div>
              <nav className="inline-flex rounded-md" aria-label="Pagination">
                <button
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={`mr-1 px-4 py-2 text-gray-500 bg-white rounded-md ${
                    currentPage <= 1
                      ? "cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Previous
                </button>
                {[...Array(totalPages).keys()].map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => changePage(pageNumber + 1)}
                    className={`mx-1 px-4 py-2 ${
                      currentPage === pageNumber + 1
                        ? "bg-blue-500 text-white"
                        : "text-gray-500 bg-white hover:bg-gray-100"
                    } rounded-md`}
                  >
                    {pageNumber + 1}
                  </button>
                ))}
                <button
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className={`ml-1 px-4 py-2 text-gray-500 bg-white rounded-md ${
                    currentPage >= totalPages
                      ? "cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ProductModal
          product={currentProduct}
          isOpen={isModalOpen}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default Product;
