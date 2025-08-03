import React from "react";

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const Pill: React.FC<PillProps> = ({
  label,
  isActive = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 ease-in-out
        border hover:shadow-md transform hover:scale-105
        ${
          isActive
            ? "bg-black text-white border-black shadow-lg"
            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
