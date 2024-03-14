/* eslint-disable react/prop-types */
import { CircleDollarSign, Ban, CircleDashed } from "lucide-react";

const Card = ({ title, amount, icon }) => {
  const IconComponent = {
    CircleDollarSign: CircleDollarSign,
    CircleDashed: CircleDashed,
    Ban: Ban,
  }[icon];

  // Define a mapping of icons to colors
  const iconColor = {
    CircleDollarSign: "#22C55E", 
    CircleDashed: "#EAB308", 
    Ban: "#EF4444", 
  }[icon];

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white p-4 shadow rounded-lg">
      <div className="details mb-4 sm:mb-0">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-lg font-bold">{amount}</div>
      </div>
      <div className="icon text-center">
        {IconComponent ? <IconComponent size={44} color={iconColor} /> : null}
      </div>
    </div>
  );
};

export default Card;
