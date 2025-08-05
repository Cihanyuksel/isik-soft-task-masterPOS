import React from "react";

interface NotificationBadgeProps {
  count?: number;
  className?: string;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  className = "",
}) => {
  return (
    <div
      className={`flex relative justify-center items-center p-0 m-0 ${className}`}
    >
      <div className="p-0 sm-0 w-7 h-7 bg-lime-300 rounded-full" />
      <div className="absolute p-0 m-0 text-sm font-bold text-zinc-900">
        {count}
      </div>
    </div>
  );
};
