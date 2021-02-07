import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
 { path: 'home',
 component: HomeComponent,
 } ,
 { path: '', redirectTo:'home',
 pathMatch:'full'
 } ,
 {
  path: 'login',
  component: LoginComponent,
} ,
{
  path: 'register',
  component: RegisterComponent,
} ,
{
path: 'class/:Grade',
component: TasksComponent,
},
{ path: 'task/:id',
component: TasksDetailsComponent,
},
{ path: 'studenthome',
component: StudentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
