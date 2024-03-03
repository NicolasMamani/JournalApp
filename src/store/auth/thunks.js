// note :  recordemos que los thunks son tareas que se despachan, pero
// note : son asincronas, por lo que debemos retornar una funcion

import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredential, logout, login } from "./AuthSlice";


export const checkingAuthentication = ( email, password) => {
  return async( dispatch ) => {
    dispatch( checkingCredential() );
  }
}

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch(checkingCredential());
    const result = await singInWithGoogle();
    if( !result.ok) return dispatch( logout(result.errorMessage));
    dispatch( login(result) ); 
  }
}