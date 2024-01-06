import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AuthenticationResponseDTO } from 'src/app/dto/auth/responses/auth-response.dto';

export interface AuthState {
  user: AuthenticationResponseDTO | null;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.registerSuccess, (state, { response }) => {
    return {
      ...state,
      isRegisterd: true,
      user: response,
      token: null,
      error: null
    };
  }),

  on(AuthActions.authenticateSuccess, (state, { response }) => {
    return {
      ...state,
      isAuthenticated: true,
      user: response,
      token: response.token,
      error: null,
    };
  }),


  on(AuthActions.registerFailure, (state) => {
    return {
      ...state,
      isAuthenticated: false,
      isRegistered: false,
      user: null,
      token: null,
      error: 'Registration failed', 
    };
  }),

  on(AuthActions.authenticateFailure, (state) => {
    return {
      ...state,
      isAuthenticated: false,
      isRegistered: false,
      user: null,
      token: null,
      error: 'Authentication failed', 
    };
  })
);