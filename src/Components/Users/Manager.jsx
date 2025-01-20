import React from 'react'
import { useNavigate } from 'react-router-dom';
const Manager = () => {

  const navigate = useNavigate();
  return (
    <>
    <div>Manager</div>

    <button onClick={() => {
      localStorage.removeItem("access_token");
      navigate("/login");
    }}>
      Logout
    </button>
    </>
  )
}

export default Manager