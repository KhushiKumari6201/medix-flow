import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";

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
