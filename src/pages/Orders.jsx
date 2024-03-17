import Table from "../components/Table/Table";

const Orders = () => {
  const Tabledata = [
    { orderId: 1, username: 'John Doe', currency: 'USD', amount: '1000',  date: '2023-03-22', status: 'In Progress' },
    { orderId: 2, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-21', status: 'Completed' },
    { orderId: 3, username: 'Jane Smith', currency: 'BTC', amount: '2000',  date: '2023-03-23', status: 'Approved' },
    { orderId: 4, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-25', status: 'Pending' },
    { orderId: 5, username: 'Jane Smith', currency: 'Naira', amount: '2000',  date: '2023-03-26', status: 'Cancelled' },
    { orderId: 6, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-27', status: 'In Progress' },
    { orderId: 7, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 8, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-29', status: 'In Progress' },
    { orderId: 9, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-23', status: 'In Progress' },
    { orderId: 10, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-22', status: 'In Progress' },
    { orderId: 11, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-25', status: 'In Progress' },
    { orderId: 12, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-26', status: 'In Progress' },
    { orderId: 13, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-27', status: 'In Progress' },
    { orderId: 14, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 15, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 16, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 17, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 18, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 19, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 20, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 21, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },
    { orderId: 22, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-28', status: 'In Progress' },

  ];

  return (
    <section className="bg-gray-100 h-screen">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold pt-5 pb-3">Order List</h3>
        <div className="rounded-md shadow-md p-4 w-[100%] h-[100%] bg-white">
          <Table data={Tabledata} />
        </div>
      </div>
    </section>
  );
};

export default Orders;
