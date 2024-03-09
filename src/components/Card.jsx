/* eslint-disable react/prop-types */
import { CircleDollarSign, ShoppingCart, Users } from "lucide-react";

const Card = ({ title, amount, icon, iconColor }) => {
  const IconComponent = {
    CircleDollarSign: CircleDollarSign,
    ShoppingCart: ShoppingCart,
    Users: Users,
  }[icon];

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white p-4 shadow rounded border border-[#1B97B2]">
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
