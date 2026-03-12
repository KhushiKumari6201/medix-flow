import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
   <Router>
      <AdminContextProvider>
         <DoctorContextProvider>
            <AppContextProvider>
               <App />
            </AppContextProvider>
         </DoctorContextProvider>
      </AdminContextProvider>
   </Router>,
);
