import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../Components/Admin";
import Workflow from "../Components/Workflow";
import Login from "../Components/Login";
import Manager from "../Components/Users/Manager";
import Hod from "../Components/Users/Hod";
import { useSelector } from "react-redux";
const MainRoutes = () => {

  const hod  = useSelector((state) => state.Login.hod);
  const  manager  = useSelector((state) => state.Login.manager);
  return (
    <Suspense fallback={<div>Loading... TESTINg</div>}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/Workflow" element={<Workflow />} />
          {/* <Route path="/designation" element={<Designations />} /> */}
        </Route>

        <Route path="/login" element={<Login />} />
        {manager.isAuthenticated&& <Route path="/manager" element={<Manager />} />}
        {hod.isAuthenticated &&<Route path="/hod" element={<Hod />} />}

      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
