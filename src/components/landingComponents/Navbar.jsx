import React from "react";
import CustomButton from "./common/CustomButton";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-15 py-4">
      {/* /left Navbar */}
      <div>
        <h3 className="text-3xl font-semibold">Wander-Wise</h3>
      </div>
      {/* right Navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-green-700 ">
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Famous</a>
          <a href="#">Contact</a>
        </nav>
        <div>
          <CustomButton text="SignIn" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
