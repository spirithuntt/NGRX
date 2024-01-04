import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthServiceActions from '../actions/auth.actions';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthServiceEffects {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthServiceActions.register),
    mergeMap(action => this.authService.register(action.registerRequest).pipe(
      map(response => AuthServiceActions.registerSuccess({ response })),
      catchError(error => of(AuthServiceActions.registerFailure({ error })))
    ))
  ));

  authenticate$ = createEffect(() => this.actions$.pipe(
    ofType(AuthServiceActions.authenticate),
    mergeMap(action => this.authService.authenticate(action.authenticationRequest).pipe(
      map(response => AuthServiceActions.authenticateSuccess({ response })),
      catchError(error => of(AuthServiceActions.authenticateFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
