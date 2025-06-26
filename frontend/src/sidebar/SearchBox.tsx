import React from "react";

interface SearchBoxProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search here", onChange, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width="275"
        height="60"
        viewBox="0 0 275 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="search-box"
      >
        <rect x="0.5" y="0.5" width="274" height="58.9899" rx="9.5" fill="white"></rect>
        <rect x="0.5" y="0.5" width="274" height="58.9899" rx="9.5" stroke="#ECECEB"></rect>
        <g opacity="0.3">
          <path
            d="M37.7544 40.4911C30.9914 40.4911 25.5089 35.0086 25.5089 28.2455C25.5089 21.4824 30.9914 16 37.7544 16C44.5175 16 50 21.4825 50 28.2456C50 35.0086 44.5175 40.4911 37.7544 40.4911ZM37.7544 19.4987C32.9237 19.4987 29.0076 23.4148 29.0076 28.2456C29.0076 33.0763 32.9237 36.9924 37.7544 36.9924C42.5852 36.9924 46.5013 33.0763 46.5013 28.2456C46.5013 23.4148 42.5851 19.4987 37.7544 19.4987Z"
            fill="#878787"
          ></path>
          <path
            d="M23.7595 43.9898C23.2945 43.9925 22.8476 43.81 22.5175 43.4825C21.8315 42.8021 21.827 41.6945 22.5073 41.0085C22.5107 41.0052 22.5141 41.0018 22.5175 40.9984L29.0951 34.4208C29.8052 33.7348 30.9369 33.7544 31.6229 34.4645C32.3089 35.1747 32.2893 36.3064 31.5792 36.9924L25.0016 43.4825C24.6714 43.81 24.2245 43.9925 23.7595 43.9898Z"
            fill="#878787"
          ></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="absolute left-[68px] top-[20px] text-gray-500 bg-transparent border-none outline-none font-['Open_Sans'] text-base"
      />
    </div>
  );
};
