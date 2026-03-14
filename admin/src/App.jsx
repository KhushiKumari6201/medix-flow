import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

const App = () => {
   const { aToken } = useContext(AdminContext);

   console.log("Atoken", aToken);

   return aToken ? (
      <div className="bg-[#F8F9FD]">
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
         />

         <Navbar />

         <div className="flex items-start">
            <Sidebar />
            <Routes>
               <Route path="/" element={<></>} />
               <Route path="/admin-dashboard" element={<Dashboard />} />
               <Route path="/all-appointments" element={<AllAppointments />} />
               <Route path="/add-doctor" element={<AddDoctor />} />
               <Route path="/doctor-list" element={<DoctorsList />} />
            </Routes>
         </div>
      </div>
   ) : (
      <>
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
         />

         <Login />
      </>
   );
};
export default App;
