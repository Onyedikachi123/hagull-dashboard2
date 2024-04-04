import { Link } from 'react-router-dom';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'New Order', message: 'You have a new order from John Doe.', link: '/orders' },
    { id: 2, type: 'Escrow Update', message: 'Escrow for order #123 has been updated.', link: '/escrow' },
    { id: 3, type: 'Customer Message', message: 'You have a new message from Jane Smith.', link: '/chat' },
    { id: 4, type: 'Order Delivered', message: 'Your order #456 has been delivered.', link: '/orders' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Notifications Center</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{notification.type}</h2>
              <p className="text-gray-600">{notification.message}</p>
            </div>
            <Link to={notification.link} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;