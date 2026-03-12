import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
   const { doctors } = useContext(AppContext);
   const navigate = useNavigate();

   const [relDoc, setRelDoc] = useState([]);

   useEffect(() => {
      if (doctors.length > 0 && speciality) {
         const doctorsData = doctors.filter(
            (doc) => doc.speciality === speciality && doc._id !== docId,
         );
         setRelDoc(doctorsData);
      }
   }, [doctors, speciality, docId]);

   return (
      <div>
         <div className="my-5">
            <h1 className="text-3xl font-medium text-center my-5">
               Top Doctors to Book
            </h1>
            <p className="text-center text-sm mt-2">
               Simply browse through our extensive list of trusted doctors.
            </p>
            <div className="doctorsGrid">
               {relDoc.slice(0, 5).map((item, index) => (
                  <div
                     onClick={() => {
                        navigate(`/appointment/${item._id}`);
                        scrollTo(0, 0);
                     }}
                     className="doctorCard hover:translate-y-[-10px] transition-all duration-500"
                     key={index}
                  >
                     <img className="bg-blue-50" src={item.image} alt="" />
                     <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                           <p className="w-2 h-2 bg-green-500 rounded-full"></p>{" "}
                           <p>Available</p>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.speciality}</p>
                     </div>
                  </div>
               ))}
            </div>
            <button
               onClick={() => {
                  navigate("/doctors");
                  scrollTo(0, 0);
               }}
               className=" bg-blue-50 text-gray px-12 py-3 rounded-full mt-10"
            >
               more
            </button>
         </div>
      </div>
   );
};

export default RelatedDoctors;
