import { useState } from 'react';

const Escrow = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, status: 'Pending', parties: 'John Doe - Jane Smith', amount: '5000 USD' },
    { id: 2, status: 'In Progress', parties: 'Mike Brown - Sarah Connor', amount: '7500 USD' },
    { id: 3, status: 'Dispute', parties: 'Chris P. Bacon - Linus Torvalds', amount: '1200 USD' },
    // Add more transactions as needed
  ]);

  const handleResolveDispute = (id) => {
    // Update the transaction status to "Resolved" when the dispute is resolved
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === id ? { ...transaction, status: 'Resolved' } : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Escrow Transaction Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Transaction ID</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Parties Involved</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="px-4 py-2">{transaction.id}</td>
                <td className="px-4 py-2">{transaction.status}</td>
                <td className="px-4 py-2">{transaction.parties}</td>
                <td className="px-4 py-2">{transaction.amount}</td>
                <td className="px-4 py-2">
                  {transaction.status === 'Dispute' && (
                    <button
                      onClick={() => handleResolveDispute(transaction.id)}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                    >
                      Resolve Dispute
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Escrow;
