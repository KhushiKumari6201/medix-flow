import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Globe } from "lucide-react"; // ✅ icon

const Navbar = () => {
   const navigate = useNavigate();
   const [token, setToken] = useState(true);

   // 🌐 language dropdown
   const [language, setLanguage] = useState("English");
   const [showLang, setShowLang] = useState(false);

   return (
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
         {/* LEFT: LOGO */}
         <img
            onClick={() => navigate("/")}
            className="w-54 cursor-pointer"
            src={assets.logo}
            alt="logo"
         />

         {/* CENTER MENU */}
         <ul className="flex items-start gap-5 font-medium">
            <NavLink to="/">
               <li className="py-1">HOME</li>
            </NavLink>
            <NavLink to="/doctors">
               <li className="py-1">ALL DOCTORS</li>
            </NavLink>
            <NavLink to="/about">
               <li className="py-1">ABOUT</li>
            </NavLink>
            <NavLink to="/contact">
               <li className="py-1">CONTACT</li>
            </NavLink>
         </ul>

         {/* RIGHT SIDE */}
         <div className="flex items-center gap-6">
            {/* 🌐 LANGUAGE SELECTOR (SMARTLING STYLE) */}
            <div className="relative">
               <div
                  onClick={() => setShowLang(!showLang)}
                  className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-600"
               >
                  <Globe size={18} />
                  <span>Language</span>
               </div>

               {showLang && (
                  <div className="absolute right-0 mt-3 w-40 bg-white border shadow-lg rounded-md z-50">
                     {["English", "हिंदी", "తెలుగు", "தமிழ்"].map((lang) => (
                        <p
                           key={lang}
                           onClick={() => {
                              setLanguage(lang);
                              setShowLang(false);
                           }}
                           className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                           {lang}
                        </p>
                     ))}
                  </div>
               )}
            </div>

            {/* PROFILE */}
            {token ? (
               <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-2">
                     <img
                        className="w-8 rounded-full"
                        src={assets.profile_pic}
                        alt=""
                     />
                     <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                  </div>

                  <div className="absolute top-full right-0 hidden group-hover:block pt-2 z-50">
                     <div className="min-w-48 bg-stone-100 shadow-lg rounded-md p-4 flex flex-col gap-3">
                        <p
                           onClick={() => navigate("/my-profile")}
                           className="cursor-pointer"
                        >
                           My Profile
                        </p>
                        <p
                           onClick={() => navigate("/my-appointments")}
                           className="cursor-pointer"
                        >
                           My Appointments
                        </p>
                        <p
                           onClick={() => setToken(false)}
                           className="cursor-pointer"
                        >
                           Logout
                        </p>
                     </div>
                  </div>
               </div>
            ) : (
               <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-500 px-3 py-2 rounded-full"
               >
                  Create account
               </button>
            )}
         </div>
      </div>
   );
};

export default Navbar;
