import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as AuthActions from '../../../store/actions/auth.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<AppState>, 
    private router: Router
  ) {}

  onSubmit() {
    const registerRequest = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
  
    console.log('Dispatching register action...');
  
    // Dispatch the register action
    this.store.dispatch(AuthActions.register({ registerRequest }));
  
    // Subscribe once and store the subscription
    const authSubscription = this.store.pipe(
      select('auth'),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((authState) => {
      console.log('Received auth state:', authState);
  
      if (authState.isRegistered) {
        console.log('Registration success. Redirecting to login...');
        this.router.navigate(['/login']);
        // Unsubscribe after successful registration
        authSubscription.unsubscribe();
      } else if (authState.error) {
        console.error('Registration error:', authState.error);
        // Unsubscribe on error
        authSubscription.unsubscribe();
      }
    });
  }
  
  
    

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
