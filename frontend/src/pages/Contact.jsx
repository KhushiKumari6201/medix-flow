import { assets } from "../assets/assets";

const Contact = () => {
   return (
      <div>
         <div className="text-center text-2xl pt-10 text-gray-500 ">
            <p>
               CONTACT <span className="text-gray-700 font-semibold">US</span>
            </p>
         </div>
         <div className="my-10 flex flex-column justify-center md:flex-row gap-10 mb-28 text-sm">
            <img
               className="w-full md:max-w-[360px]"
               src={assets.contact_image}
               alt=""
            />

            <div className="flex-column justify-center items-start gap-6">
               <p className="mt-6 font-semibold text-lg text-gray-600">
                  Our Office
               </p>
               <p className="mt-6 text-gray-500">
                  3rd Floor, Tech Park Building, <br /> Madhapur, HITEC
                  City,Hyderabad{" "}
               </p>
               <p className="mt-6 text-gray-500">
                  +91 98765 43210
                  <br /> Email: medixflow@gmail.com
               </p>
               <p className="mt-6 font-semibold text-lg text-gray-600">
                  Careers at MEDIXFLOW
               </p>
            </div>
         </div>
      </div>
   );
};

export default Contact;
