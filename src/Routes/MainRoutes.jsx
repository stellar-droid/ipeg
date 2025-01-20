import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../Components/Admin";
import Workflow from "../Components/Workflow";
import Login from "../Components/Login";
import Manager from "../Components/Users/Manager";
import Hod from "../Components/Users/Hod";
import { useSelector } from "react-redux";
import PoForm from "../Components/ReusableComponents/PoForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { hodSet, managerSet } from "../Store/reducers/Login";

const MainRoutes = () => {
  const hod = useSelector((state) => state.Login.hod);
  const manager = useSelector((state) => state.Login.manager);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    // console.log("Auth Token",jwtDecode(accessToken));
    if (accessToken) {
      // Decode the token to get the role
      const decoded = jwtDecode(accessToken);
      const role = decoded.role;
      console.log("Role", role);
      // Dispatch role-based state
      if (role === "manager") {
        dispatch(managerSet({ isAuthenticated: true }));
        navigate("/manager");
      } else if (role === "hod") {
        dispatch(hodSet({ isAuthenticated: true }));
        navigate("/hod");
      } else {
        // If the role is not authorized, you can log the user out or redirect
        navigate("/login");
      }
    }
  }, [dispatch, navigate]);
  return (
    <Suspense fallback={<div>Loading... TESTINg</div>}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/Workflow" element={<Workflow />} />
          
          <Route path="/poform" element={<PoForm />} />
        </Route>



                      {/* AUTHENTICATION ROUTES */}
        <Route path="/login" element={<Login />} />
        {manager.isAuthenticated&& <Route path="/manager" element={<Manager />} >
        
        
        </Route>}
        {hod.isAuthenticated &&<Route path="/hod" element={<Hod />} >
        
        
        </Route>}
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
