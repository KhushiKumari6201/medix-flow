import { assets } from "../assets/assets";

const Header = () => {
   return (
      <div className="bg-blue-900 rounded-xl px-6 md:px-10 lg:px-20">
         <div className="flex md:flex-row items-center md:items-start py-12 md:py-20 gap-8">
            {/* LEFT SIDE - Text */}
            <div className="flex flex-col items-start gap-3 text-white text-sm font-light">
               <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight">
                  Book Appointment <br /> With Trusted Doctors
               </h1>
               <div>
                  <img className="w-28" src={assets.group_profiles} alt="" />
                  <p className="text-sm md:text-base text-white/90">
                     Easily find trusted doctors and schedule your appointments{" "}
                     <br /> in just a few clicks.
                  </p>
               </div>
               <a href="#speciality">
                  <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                     Book appointment
                     <img src={assets.arrow_icon} alt="arrow" />
                  </button>
               </a>
            </div>

            {/* RIGHT SIDE - Doctors Image */}
            <div className="md:w-1/2 flex item-end ">
               <img
                  src={assets.header_img}
                  alt="Doctors"
                  className="w-full max-w-md rounded-lg self-end"
               />
            </div>
         </div>
      </div>
   );
};

export default Header;
