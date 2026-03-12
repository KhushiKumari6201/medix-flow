import { useContext } from "react";
import "./TopDoctors.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
   const navigate = useNavigate();
   const { doctors } = useContext(AppContext);

   return (
      <div className="my-5">
         <h1 className="text-3xl font-medium text-center my-5">
            Top Doctors to Book
         </h1>
         <p className="text-center text-sm mt-2">
            Simply browse through our extensive list of trusted doctors.
         </p>

         <div className="doctorsGrid">
            {doctors.slice(0, 10).map((item, index) => (
               <div
                  key={index}
                  onClick={() => {
                     navigate(`/appointment/${item._id}`);
                     scrollTo(0, 0);
                  }}
                  className="doctorCard hover:translate-y-[-10px] transition-all duration-500"
               >
                  {/* Doctor Image */}
                  <div className="doctor-img-container">
                     <img
                        src={item.image}
                        alt={item.name}
                        className="doctor-img"
                     />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-sm mb-2">
                        <span className="availability-dot"></span>
                        <p>Available</p>
                     </div>
                     <p className="font-medium">{item.name}</p>
                     <p className="text-gray-500">{item.speciality}</p>
                  </div>
               </div>
            ))}
         </div>

         <button
            onClick={() => {
               navigate("/doctors");
               scrollTo(0, 0);
            }}
            className="bg-blue-50 text-gray px-12 py-3 rounded-full mt-10"
         >
            more
         </button>
      </div>
   );
}

export default TopDoctors;
