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
  on(AuthActions.authenticateSuccess, (state, { response }) => {
    return {
      ...state,
      isAuthenticated: true,
      user: response,
      token: response.token,
      error: null,
    };
  }),

  on(AuthActions.authenticateFailure, 
    (state, { error }) => ({ ...state, user: null, error }))

);