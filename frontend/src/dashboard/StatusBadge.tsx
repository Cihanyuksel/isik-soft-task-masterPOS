import React from "react";
import { TiTick, TiStopwatch, TiTimes } from "react-icons/ti";

interface StatusBadgeProps {
  status: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case true:
        return "bg-lime-600 text-lime-100";
      case false:
        return "bg-red-400 text-red-100";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case true:
        return <TiTick className="text-lg text-lime-100" />;
      case false:
        return <TiTimes className="text-lg text-red-100" />;
      default:
        return null;
    }
  };
  return (
    <div
      className={`w-full flex gap-1.5 items-center px-3 py-1.5 m-0 text-xs font-medium rounded  h-8 ${getStatusStyles()}`}
    >
      {getStatusIcon()}
      <span className={status === true ? "text-lime-100 " : ""}>
        {status ? "Completed" : "Canceled"}
      </span>
    </div>
  );
};
