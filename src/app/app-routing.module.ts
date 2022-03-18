import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ConContactusComponent } from './con-contactus/con-contactus.component';
import { HomeComponent } from './home/home.component';
import { RegisterpagrComponent } from './register/registerpagr/registerpagr.component';
import { RegisterModule } from './register/register.module';

const routes: Routes = [ 

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
{
  path:'aboutus',
  component:AboutusComponent
},
{
path:'Contactus',
component:ConContactusComponent

},
{
  path:'register',
  component:RegisterpagrComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
