import React from "react";

function CustomButton({ text, onClick }) {
  return (
    <button
      className="bg-green-700 text-white px-6 py-2 text-lg rounded hover:bg-green-600 hover:scale-105 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;
