// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flex items-center justify-between px-30 py-20 ">
//       {/* left side */}
//       <div>
//         <div className="mb-10">
//           <h2 className="text-4xl font-bold mb-2">WanderWise</h2>
//           <p className="text-lg text-gray-700">
//             Enjoy the trip with no worries.
//           </p>
//         </div>
//         <div className="text-lg">
//           <p>Clove I.T. Private Limited</p>
//           <p>Puspalal Chowk, Biratnagar, Nepal</p>
//           <p>+977 9812367036</p>
//         </div>
//       </div>
//       {/* right side */}
//       <div className="flex items-center gap-20">
//         <div className="flex flex-col gap-2 text-lg font-medium text-gray-700">
//           <h4 className="text-black text-xl">Features</h4>
//           <a href="#">Your Trips</a>
//           <a href="#">Itineraries</a>
//           <a href="#">Packaging List</a>
//           <a href="#">Collaborate</a>
//         </div>
//         <div className="flex flex-col gap-2 text-lg font-medium text-gray-700">
//           <h4 className="text-black text-xl">Useful Links</h4>
//           <a href="#">About Us</a>
//           <a href="#">Contact Us</a>
//           <a href="#">Privacy policy</a>
//           <a href="#">Terms and Condition</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Plane,
  CalendarDays,
  Package,
  Users,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-4">WanderWise</h2>
          <p className="text-gray-300">
            Explore, plan, and book your perfect trip with WanderWise. Your
            adventure starts here!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-green-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="/trips" className="hover:text-green-600 transition">
                Trips
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <a href="/Trips" className="hover:text-green-600 transition">
                <span className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  Your Trips
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Itineraries"
                className="hover:text-green-600 transition"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Itineraries
                </span>
              </a>
            </li>
            <li>
              <a href="/Package" className="hover:text-green-600 transition">
                <span className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Packaging List
                </span>
              </a>
            </li>
            <li>
              <a
                href="/Collaborate"
                className="hover:text-green-600 transition"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Collaborate
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-600 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-600 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-600 transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} WanderWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
