import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'; 
import Orders from './pages/Orders'; 
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import SidebarItem from './components/SidebarItem';
import { LayoutDashboard as DashboardIcon, ShoppingCart as OrdersIcon,
  UserCog as ProfileIcon, DollarSign as ProductIcon, MessagesSquare as ChatIcon } from 'lucide-react';

function App() {
  return (
    <Router>
      <main className="flex">
      <Sidebar>
          <SidebarItem icon={<DashboardIcon />} text="Dashboard" to="/" />
          <SidebarItem icon={<OrdersIcon />} text="Orders" to="/orders" />
          <SidebarItem icon={<ProfileIcon />} text="Profile" to="/profile" />
          <SidebarItem icon={<ProductIcon />} text="Product" to="/product" />
          <SidebarItem icon={<ChatIcon />} text="Chat" to="/chat" />
        </Sidebar>
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product" element={<Product />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
