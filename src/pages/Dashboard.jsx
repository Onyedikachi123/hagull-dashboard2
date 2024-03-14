import Card from "../components/Card";
import data from "../constants/data.json";
import RecentOrdersCard from "../components/RecentOrdersCard";


const Dashboard = () => {
  return (
    <section>
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
            <h2 className="font-bold text-black">Monthly Earnings</h2>
            </div>
            <div className="pt-5">
            <h2 className="font-bold text-black">Orders</h2>
            </div>
          </div>
          <RecentOrdersCard />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
