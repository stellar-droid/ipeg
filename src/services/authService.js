import axios from '../utils/axios'; // Assuming you have your axios instance configured

const login = async (username, password, dispatch, navigate) => {
  try {
    const response = await axios.post('http://172.16.22.35:9001/login/', {
      username,
      password,
    });

    const { authToken } = response.data;

    // Save the token in localStorage
    localStorage.setItem('authToken', authToken);

    // Decode the token to get the role
    const role = JSON.parse(atob(authToken.split('.')[1])).role;

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
  login,
};