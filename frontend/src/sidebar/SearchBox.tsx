import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBoxProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search here",
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`max-w-full flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-4 w-full text-2xl ${className}`}
    >
      <FiSearch className="text-gray-200 text-3xl" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="flex-1 bg-transparent outline-none text-lg text-zinc-500 border-none placeholder:text-gray-200"
      />
    </div>
  );
};
