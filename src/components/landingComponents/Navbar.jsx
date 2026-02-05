import React from "react";
import CustomButton from "../common/CustomButton";

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center px-12 py-4">
      {/* left navbar */}
      <div className=" flex flex-row gap-5 items-center justify-center">
        <img className="w-12 h-12" src="/logo.png" alt="logo" />
        <div>
          <h2 className="text-4xl text-green-600 font-bold">Wander-wise</h2>
        </div>
      </div>
      {/* right navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-green-600">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Famous Trip</a>
          <a href="#">Contact</a>
        </nav>
        <a href="/signin">
          <CustomButton text="Sign in" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
