/* eslint-disable react/prop-types */
import { createContext } from "react";
import { MoreVertical } from "lucide-react";
import logo from "../assets/logo.png";

export const SidebarContext = createContext({ expanded: true });

const Sidebar = ({ children }) => {
  return (
    <SidebarContext.Provider value={{ expanded: true }}>
      <aside className="fixed top-0 left-0 h-full">
        <nav className="flex flex-col bg-white border-r shadow-sm h-full">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={logo}
              className="w-20 overflow-hidden transition-all"
              alt=""
            />
          </div>
          <ul className="flex-1 px-3 pt-5 overflow-auto">{children}</ul>
          <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=eaf8ff&color=1b97b2&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className="flex justify-between items-center w-52 ml-3">
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">kachi@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
