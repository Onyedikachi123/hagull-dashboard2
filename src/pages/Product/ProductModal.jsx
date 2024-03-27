import  { useState } from 'react';
import PropTypes from 'prop-types';
import { XCircle } from 'lucide-react';

const defaultProduct = {
  name: '',
  amount: '',
  rate: '',
  symbol: '',
};

const ProductModal = ({ product, isOpen, onSave, onClose }) => {
  const [editedProduct, setEditedProduct] = useState(product || defaultProduct);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProduct);
    setEditedProduct(defaultProduct); // Reset the form after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center">
          <h3 className="text-lg">{product ? 'Edit Product' : 'Add New Product'}</h3>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">Name</label>
            <input type="text" id="name" name="name" value={editedProduct.name} onChange={handleChange} className="border rounded p-2 w-full" />
          </div>
          <div>
            <label htmlFor="amount" className="block">Amount</label>
            <input type="text" id="amount" name="amount" value={editedProduct.Amount} onChange={handleChange} className="border rounded p-2 w-full" />
          </div>
          <div>
            <label htmlFor="rate" className="block">Rate</label>
            <input type="text" id="rate" name="rate" value={editedProduct.rate} onChange={handleChange} className="border rounded p-2 w-full" />
          </div>
          <div>
            <label htmlFor="symbol" className="block">Symbol</label>
            <input type="text" id="symbol" name="symbol" value={editedProduct.symbol} onChange={handleChange} className="border rounded p-2 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{product ? 'Save Changes' : 'Add Product'}</button>
        </form>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.string,
    rate: PropTypes.string,
    symbol: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
