import React from "react";
import CustomButton from "../common/CustomButton";
import useAuth from "@/hooks/useAuth";

const AppNavbar = () => {
  const { logout } = useAuth();
  return (
    <header className=" flex justify-between items-center px-12 py-4 border-b border-gray-300 shadow-lg">
      {/* left navbar */}
      <div className=" flex flex-row gap-5 items-center justify-center">
        <img className="w-12 h-12" src="/logo.png" alt="logo" />
        <div>
          <h2 className="text-4xl font-bold">Wander-wise</h2>
        </div>
      </div>
      {/* right navbar */}
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-green-600">
          <a href="/dashboard">Dashboard</a>
          <a href="/trips">Trips</a>
          <a href="/itineraries">Itineraries</a>
          <a href="/baggage">Baggage</a>
        </nav>
        <CustomButton text="Logout" onClick={logout} />
      </div>
    </header>
  );
};

export default AppNavbar;
