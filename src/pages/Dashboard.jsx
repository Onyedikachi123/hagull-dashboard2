import Card from "../components/Card";
import data from "../constants/data.json";

const Dashboard = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold pt-2">Dashboard</h1>
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
          </div>
          <aside className="bg-white p-4 shadow rounded">
            <h2 className="text-l font-bold">Recent Orders</h2>
            <p>Content for orders notifications</p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
