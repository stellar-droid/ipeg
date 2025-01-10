import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   hod:{isAuthenticated:false},
    manager:{isAuthenticated:false},
};



const Login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        hodSet(state, action) {
            state.hod = action.payload
        },
        managerSet(state, action) {
            state.manager = action.payload
        }
    }
});

export default Login.reducer;

export const { hodSet, managerSet } = Login.actions;