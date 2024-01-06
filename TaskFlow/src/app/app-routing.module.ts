import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TasksComponent } from './components/dashboard/tasks/tasks.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent ,
    title : 'Login Page'
  },
  {
    path : 'register',
    component : RegisterComponent ,
    title : 'Register Page'
  },
  {
    path : 'tasks',
    component : TasksComponent ,
    title : 'Tasks Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
