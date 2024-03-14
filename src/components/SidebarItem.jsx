/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { SidebarContext } from './Sidebar';
import { Link, useMatch } from 'react-router-dom'; // Updated useMatch import

const SidebarItem = ({ icon, text, alert, to }) => {
  const { expanded } = useContext(SidebarContext);
  let match = useMatch(to); // Updated to use useMatch

  const isActive = match ? 'bg-[#EA8207] text-[#fff]' : '';

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-r-3xl cursor-pointer transition-colors group ${
        isActive || 'hover:bg-[#1B97B2] hover:text-[#fff] text-[#000]'
      }`}
    >
      <Link to={to} className="flex items-center w-full">
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? 'w-52 ml-3' : 'w-0'
          }`}
        >
          {text}
        </span>
      </Link>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-red-500 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}
      {!expanded && text && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#EAF8FF] text-[#1B97B2] text-sm invisible group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 ${
            match ? 'opacity-0' : 'opacity-20 -translate-x-3'
          }`}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
