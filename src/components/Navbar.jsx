import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Mail, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white text-black pt-2 px-4 border-b border-[#1B97B2]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded p-2 outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-1.5 ">
            <Bell size="20" color="#1B97B2" />
          </div>
          <div className="p-1.5">
            <Mail size="20" color="#1B97B2" />
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src="https://ui-avatars.com/api/?name=John+Doe"
                alt="User"
                className="w-8 h-8 rounded-full border border-[#1B97B2]"
              />
              <ChevronDown size="20" />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
