import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'; 
import Orders from './pages/Orders'; 
import SidebarItem from './components/SidebarItem';
import { LayoutDashboard as DashboardIcon, ShoppingCart as OrdersIcon } from 'lucide-react';

function App() {
  return (
    <Router>
      <main className="flex">
      <Sidebar>
          <SidebarItem icon={<DashboardIcon />} text="Dashboard" to="/" />
          <SidebarItem icon={<OrdersIcon />} text="Orders" to="/orders" />
        </Sidebar>
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
