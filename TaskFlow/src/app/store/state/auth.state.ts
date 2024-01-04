import { User } from '../../modal/entities/user.interface'; 

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};