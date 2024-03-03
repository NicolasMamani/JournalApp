import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'not-authenticated', // note: al principio no sabemos si esta autenticado o no
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: null,
    },
    reducers: {
      login: (state, { payload })=>{
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
        state.errorMessage = null;
      },
      logout: (state, payload) => {
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload?.errorMessage
      },
      checkingCredential: (state) => {
        state.status = 'checking'; // note: lo usamos en thunks
      }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential } = authSlice.actions;