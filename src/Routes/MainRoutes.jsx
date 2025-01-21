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
  // const hod = useSelector((state) => state.Login.hod);
  // const manager = useSelector((state) => state.Login.manager);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [accessToken, setAccessToken] = React.useState(localStorage.getItem("access_token"));
  // const accessToken = localStorage?.getItem("access_token");
  //  const decoded = jwtDecode(accessToken);
  //     const role = decoded.role;
React.useEffect(() => {
    // This will make sure we react to changes in localStorage
    const token = localStorage.getItem("access_token");
    setAccessToken(token); // Update state whenever the access token changes
  }, [localStorage.getItem("access_token")]);

  if (!accessToken) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    );
  }

  const decoded = jwtDecode(accessToken);
  console.log("Anuj", accessToken, !accessToken);
  /* React.useEffect(() => {
    // console.log("Auth Token",jwtDecode(accessToken));
    if (accessToken) {
      // Decode the token to get the role
      
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
  }, [dispatch, navigate]); */
  return (
    // <Suspense fallback={<div>Loading... TESTINg</div>}>
    //   <Routes>
    //     {!accessToken?<Route path='/login' element={<Login/>}/>:
    //    <>
    //    {jwtDecode(accessToken).role === "hod" && <Route path='/hod' element={<Hod/>}>
    //    <Route path='workflow' element={<Workflow/>}/>
    //    <Route path='poform' element={<PoForm/>}/>
    //    </Route>}
    //     {jwtDecode(accessToken).role === "manager" && <Route path='/manager' element={<Manager/>}/>}
       
    //     </>
    //    }
        /* <Route path="/login" element={<Login />} />
        {manager.isAuthenticated && (
          <Route path="/manager" element={<Manager />} />
        )}
        {hod.isAuthenticated && (
          <Route path="/hod" element={<AdminLayout />}>
            <Route path="Workflow" element={<Workflow />} />
            <Route path="poform" element={<PoForm />} />
          </Route>
        )} */
    //   </Routes>
    // </Suspense>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {decoded.role === "hod" && (
          <Route path='/hod' element={<Hod />}>
            <Route path='workflow' element={<Workflow />} />
            <Route path='poform' element={<PoForm />} />
          </Route>
        )}
        {decoded.role === "manager" && <Route path='/manager' element={<Manager />} >
        <Route path='workflow' element={<Workflow />} />
            <Route path='poform' element={<PoForm />} />
        </Route>}
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
