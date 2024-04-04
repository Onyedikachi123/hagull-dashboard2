import { useState } from 'react';
import jsPDF from 'jspdf';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate a payment process
    console.log('Submitting payment details:', paymentDetails);

    // Generate PDF invoice
    const invoice = new jsPDF();
    
    invoice.setFontSize(20);
    invoice.text('Invoice', 105, 25, null, null, 'center');
    
    invoice.setFontSize(12);
    invoice.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);
    invoice.text(`Card Number: ${paymentDetails.cardNumber.replace(/\d{12}(\d{4})/, '**** **** **** $1')}`, 20, 50);
    invoice.text(`Amount: $${paymentDetails.amount}`, 20, 60);
    
    // Save the PDF (Here we would normally send this to the server or save it)
    invoice.save('invoice.pdf');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Payment and Invoicing</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                required
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="MM/YY"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="123"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="100.00"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Pay and Generate Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
