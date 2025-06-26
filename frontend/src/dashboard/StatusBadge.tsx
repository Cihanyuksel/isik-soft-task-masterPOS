import React from "react";
import { TiTick, TiStopwatch, TiTimes } from "react-icons/ti";

interface StatusBadgeProps {
  status: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case true:
        return "bg-[rgba(137,210,51,0.1)] text-lime-800 ";
      case false:
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case true:
        return <TiTick className="text-3xl text-lime-5  00" />;
      case false:
        return <TiTimes className="text-xl text-red-700" />;
      default:
        return null;
    }
  };
  return (
    <div
      className={`flex gap-1.5 items-center px-3 py-1.5 m-0 text-xs font-medium rounded w-3/4 h-8 ${getStatusStyles()}`}
    >
      {getStatusIcon()}
      <span className={status === true ? "text-lime-500 " : ""}>{status ? "Completed" : "Canceled"}</span>
    </div>
  );
};
