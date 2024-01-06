import { createAction, props } from '@ngrx/store';
import { AuthenticationRequestDTO } from '../../dto/auth/requests/auth-request.dto';
import { AuthenticationResponseDTO } from '../../dto/auth/responses/auth-response.dto';
import { RegisterRequestDTO } from 'src/app/dto/auth/requests/register-request.dto';

export const register = createAction(
    '[Auth] Register', 
    props<{ registerRequest: RegisterRequestDTO }>()
);

export const registerSuccess = createAction(
    '[Auth] Register Success', 
    props<{ response: AuthenticationResponseDTO }>()
);

export const registerFailure = createAction(
    '[Auth] Register Failure', 
    props<{ error: any }>()
);


export const authenticate = createAction(
    '[Auth] Authenticate',
    props<{ authenticationRequest: AuthenticationRequestDTO }>()
);
      
export const authenticateSuccess = createAction(
    '[Auth] Authenticate Success',
    props<{ response: AuthenticationResponseDTO }>()
);

export const authenticateFailure = createAction(
    '[Auth] Authenticate Failure',
    props<{ error: any }>()
);