import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as AuthActions from '../../../store/actions/auth.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  email = '';
  password = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<AppState>,
    private cookieService: CookieService
  ) {}

  onSubmit() {
    this.store.dispatch(AuthActions.authenticate({
      authenticationRequest: {
        email: this.email,
        password: this.password
      }
    }));

    this.store.pipe(
      select('auth'),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((authState) => {
      if (authState.isAuthenticated) {
        if (authState.user) {
          // Store user information in session storage
          sessionStorage.setItem('userId', authState.user.userId.toString());
          sessionStorage.setItem('firstName', authState.user.firstName);
          sessionStorage.setItem('lastName', authState.user.lastName);
          sessionStorage.setItem('email', authState.user.email);
          sessionStorage.setItem('role', authState.user.role.toString());
          sessionStorage.setItem('tokens', authState.user.tokens.toString());
        }

        // Store token in HTTP cookie
        if (authState.token !== null) {
          this.cookieService.set('jwtToken', authState.token);
        }

      } else if (authState.error) {
        console.error('Authentication error:', authState.error);
      }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
