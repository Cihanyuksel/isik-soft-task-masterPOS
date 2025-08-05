import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`flex justify-center items-center p-0 m-0 w-10 h-10 bg-white rounded-lg border border-gray-200 transition-all cursor-pointer duration-[0.2s] ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
