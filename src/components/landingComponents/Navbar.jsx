import React from "react";
import CustomButton from "../common/CustomButton";

const Navbar = () => {
  return (
    <header className=" flex justify-between items-center px-12 py-4">
      {/* left navbar */}
      <div>
        <h2 className="text-4xl font-bold">Wander-wise</h2>
      </div>
      {/* right navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-green-600">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Famous Trip</a>
          <a href="#">Contact</a>
        </nav>
        <CustomButton text="Sign in" />
      </div>
    </header>
  );
};

export default Navbar;
