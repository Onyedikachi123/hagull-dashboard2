import { Link } from "react-router-dom";
import userImage from "../assets/kachi.jpeg";


const ordersData = [
  {
    userImage: "../assets/kachi.jpeg",
    statement: "Jane placed an order for $150.",
    orderDate: "Mar 11, 10:15 AM",
  },
  {
    userImage: "../assets/kachi.jpeg",
    statement: " Smith placed an order for $250.",
    orderDate: "Mar 12, 9:30 AM",
  },
  {
    userImage: "../assets/kachi.jpeg",
    statement: " Smith placed an order for $250.",
    orderDate: "Mar 12, 9:30 AM",
  },
  {
    userImage: "../assets/kachi.jpeg",
    statement: " Smith placed an order for $250.",
    orderDate: "Mar 12, 9:30 AM",
  },
  {
    userImage: "../assets/kachi.jpeg",
    statement: " Smith placed an order for $250.",
    orderDate: "Mar 12, 9:30 AM",
  },
  {
    userImage: "../assets/kachi.jpeg",
    statement: " Smith placed an order for $250.",
    orderDate: "Mar 12, 9:30 AM",
  },
];

const RecentOrdersCard = () => {
  return (
    <aside className="bg-white p-3 shadow rounded relative h-[28rem]">
    <Link to="/orders" className="absolute top-4 right-4 text-[#1B97B2] text-xs underline decoration-[#1B97B2]">
      All Orders
    </Link>
    <h2 className="text-md font-bold">Recent Orders</h2>
    <div className="space-y-4 mt-4">
      {ordersData.map((order, index) => (
        <div key={index} className="flex items-center space-x-4 border-b">
          <img src={userImage} alt="User" className="w-7 h-7 rounded-full" />
          <div>
            <p className="text-xs">{order.statement}</p>
            <p className="text-xs text-gray-400">{order.orderDate}</p>
          </div>
        </div>
      ))}
    </div>
  </aside>
  );
};

export default RecentOrdersCard;
