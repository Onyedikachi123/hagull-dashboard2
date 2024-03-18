import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Escrow from "./pages/Escrow";
import Payment from "./pages/Payment";
import Kyc from "./pages/Kyc";
import Reviews from "./pages/Reviews";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import ErrorPage from "./pages/ErrorPage";
import { useContext } from "react";
import { SidebarContext } from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import {
  LayoutDashboard as DashboardIcon,
  ShoppingCart as OrdersIcon,
  UserCog as ProfileIcon,
  DollarSign as ProductIcon,
  MessagesSquare as ChatIcon,
  Handshake as EscrowIcon,
  CircleDollarSign as PaymentIcon,
  ShieldCheck as KycIcon,
  Star as FeedbackIcon,
  BarChart4 as AnalyticsIcon,
  Bell as NotificationIcon,
  BadgeHelp as HelpIcon,
  Headset as SupportIcon,
} from "lucide-react";
import Footer from "./components/Footer";

function App() {
  const { expanded } = useContext(SidebarContext);

  return (
    <>
      <Router>
        <main className="flex">
          <Sidebar>
            <SidebarItem icon={<DashboardIcon />} text="Dashboard" to="/" />
            <SidebarItem icon={<OrdersIcon />} text="Orders" to="/orders" />
            <SidebarItem icon={<ProfileIcon />} text="Profile" to="/profile" />
            <SidebarItem icon={<ProductIcon />} text="Product" to="/product" />
            <SidebarItem icon={<ChatIcon />} text="Chat" to="/chat" />
            <SidebarItem icon={<EscrowIcon />} text="Escrow Transactions" to="/escrow" />
            <SidebarItem icon={<PaymentIcon />} text="Payment and Invoicing" to="/payment" />
            <SidebarItem icon={<KycIcon />} text="KYC/AML Compliance" to="/kyc" />
            <SidebarItem icon={<FeedbackIcon />} text="Reviews" to="/reviews" />
            <SidebarItem icon={<AnalyticsIcon />} text="Reporting and Analytics" to="/analytics" />
            <SidebarItem icon={<NotificationIcon />} text="Notifications" to="/notifications" />
            <SidebarItem icon={<HelpIcon />} text="FAQs and Help Center" to="/faq" />
            <SidebarItem icon={<SupportIcon />} text="Support" to="/support" />
          </Sidebar>
          <div className={`flex-1 ${expanded ? "pl-[294px]" : ""}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product" element={<Product />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/escrow" element={<Escrow />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/kyc" element={<Kyc />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
