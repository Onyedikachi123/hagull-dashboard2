/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { SidebarContext } from './Sidebar';
import { Link } from 'react-router-dom';


const SidebarItem = ({ icon, text, active, alert, to }) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-[#EAF8FF] text-gray-600'}`}>
    <Link to={to} className="flex items-center w-full">
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
        {text}
      </span>
    </Link>
    {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-[#EAF8FF] ${expanded ? '' : 'top-2'}`}/>}
    {!expanded && (
      <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-[#EAF8FF] text-[#1B97B2] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
        {text}
      </div>
    )}
  </li>
  );
};

export default SidebarItem;