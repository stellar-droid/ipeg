import axios from '../utils/axios'; // Assuming you have your axios instance configured
import { managerSet } from '../Store/reducers/Login';
import { hodSet } from '../Store/reducers/Login';
import { jwtDecode } from "jwt-decode";
const Login = async (username, password, dispatch, navigate) => {
  try {
    const response = await axios.post('/login', {
      username,
      password,
    });
    console.log("Response ", response)
    const { access_token } = response.data;
    console.log("Access Token ", access_token)
    // Save the token in localStorage
    localStorage.setItem('access_token', access_token);

    // Decode the token to get the role
    // const role = JSON.parse(atob(access_token.split('.')[1])).role;
    // const role = JSON.parse(new TextDecoder().decode(Uint8Array.from(jwtDecode(access_token.split('.')[1]), c => c.charCodeAt(0)))).role;
    const decoded = jwtDecode(access_token);
    const role = decoded.role;

    // Dispatch role-based state and navigate accordingly
    if (role === 'manager') {
      dispatch(managerSet({ isAuthenticated: true }));
      navigate('/manager');
    } else if (role === 'hod') {
      dispatch(hodSet({ isAuthenticated: true }));
      navigate('/hod');
    } else {
      throw new Error('Unauthorized role');
    }

    return response; // Return the response if needed
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Invalid username or password.');
  }
};

export default {
  Login,
};