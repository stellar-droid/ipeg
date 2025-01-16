import React from "react";
import LoginBG from "../assets/LoginBG.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hodSet, managerSet } from "../Store/reducers/Login";
import axios from "../utils/axios";
import authService from "../services/authService";
const Login = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState("");
  const hod  = useSelector((state) => state.Login.hod);
    const  manager  = useSelector((state) => state.Login.manager);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear previous errors

    try {
      await authService.login(formData.username, formData.password, dispatch, navigate);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  React.useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]);

  React.useEffect(() => {
    console.log("USER TYPE LOGIN",manager);
    console.log("HOD",hod);
  }, [hod,manager]);
  return (
    <>
      <div className="w-full max-w-xs login-div">
        <img src={LoginBG} alt="login-bg-image" className="login-bg" />

        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form-div"
          onSubmit={handleFormSubmit} // Handle form submission
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange} // Update state on input change
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={formData.password}
              onChange={handleInputChange} // Update state on input change
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" // Submit the form
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2025 ESDS Software Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
