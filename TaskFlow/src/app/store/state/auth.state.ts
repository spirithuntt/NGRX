import { AuthenticationResponseDTO } from 'src/app/dto/auth/responses/auth-response.dto';

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthenticationResponseDTO | null;
  token: string | null;
  error: string | null;
  isRegistered: boolean; 
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
  isRegistered: false,
};
