import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }, [pathname]);

   return (
      <footer className="md:px-10 px-4 py-10 bg-white grid md:grid-cols-3 gap-5 text-sm">
         {/* Left Section */}
         <div>
            <img className="mb-5 w-40" src={assets.logo} alt="logo" />
            <p className="text-gray-600 leading-6 md:w-2/3">
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
            </p>
         </div>

         {/* Center Section */}
         <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
               <li>
                  <Link to="/" className="hover:text-black">
                     Home
                  </Link>
               </li>
               <li>
                  <Link to="/about" className="hover:text-black">
                     About Us
                  </Link>
               </li>
               <li>
                  <Link to="/contact" className="hover:text-black">
                     Contact Us
                  </Link>
               </li>
               <li>
                  <Link to="/privacy" className="hover:text-black">
                     Privacy Policy
                  </Link>
               </li>
            </ul>
         </div>

         {/* Right Section */}
         <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
               <li>+91-212-456-7890</li>
               <li>medixflow@gmail.com</li>
            </ul>
         </div>

         <hr className="col-span-3 my-5" />
         <p className="col-span-3 py-5 text-sm text-center text-gray-500">
            Copyright 2024 © MedixFlow. All Rights Reserved.
         </p>
      </footer>
   );
};

export default Footer;
