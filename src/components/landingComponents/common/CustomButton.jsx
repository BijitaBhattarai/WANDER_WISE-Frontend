import React from "react";

const CustomButton = ({ text }) => {
  return (
    <button className="bg-green-700 text-white rounded px-4 py-1 text-lg hover:bg-green-600 cursor-pointer">
      {text}
    </button>
  );
};

export default CustomButton;
