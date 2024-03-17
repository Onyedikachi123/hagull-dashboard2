/* eslint-disable no-unused-vars */
import Card from "../components/Card";
import data from "../constants/data.json";
import RecentOrdersCard from "../components/RecentOrdersCard";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import revenueData from "../constants/revenueData.json";
import Table from "../components/Table/Table";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";



const Dashboard = () => {

  const Tabledata = [
    { orderId: 1, username: 'John Doe', currency: 'USD', amount: '1000', date: '2023-03-28', status: 'In Progress' },
    { orderId: 2, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-29', status: 'Completed' },
    { orderId: 3, username: 'Jane Smith', currency: 'BTC', amount: '2000', date: '2023-03-22',  status: 'Approved' },
    { orderId: 4, username: 'Jane Smith', currency: 'EUR', amount: '2000', date: '2023-03-23',  status: 'Pending' },
    { orderId: 5, username: 'Jane Smith', currency: 'Naira', amount: '2000', date: '2023-03-25',  status: 'Cancelled' },
    { orderId: 6, username: 'Jane Smith', currency: 'EUR', amount: '2000', date: '2023-03-26',  status: 'In Progress' },
    { orderId: 7, username: 'Jane Smith', currency: 'EUR', amount: '2000',  date: '2023-03-21', status: 'In Progress' },
  ];

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold pt-5 pb-3">Welcome back Kachi!!</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  amount={item.amount}
                  icon={item.icon}
                  iconColor="#1B97B2"
                />
              ))}
            </div>
            <div className="pt-5">
              <div className="rounded-md shadow-md p-4 w-[100%] h-[20rem] bg-white">
                <Line
                  data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Revenue",
                        data: revenueData.map((data) => data.revenue),
                        backgroundColor: "#22c55e",
                        borderColor: "#22c55e",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      line: {
                        tension: 0.5,
                      },
                    },
                    plugins: {
                      title: {
                        text: "Monthly Revenue & Cost",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="pt-5">
              <h2 className="font-bold text-black pb-5">Order List</h2>
              <div className="rounded-md shadow-md p-4 w-[100%] h-[100%] bg-white">
              <Table data={Tabledata} />
              </div>
            </div>
          </div>
          <RecentOrdersCard />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
