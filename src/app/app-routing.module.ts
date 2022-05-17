import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FetchemailComponent } from './fetchemail/fetchemail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';


const routes: Routes = [
{path:"",redirectTo:"insertUser",pathMatch:"full"},
{path:"insertUser",component:LoginsignupComponent},
{path:"loginUser",component:LoginComponent},
{path:"home",component:HomeComponent},
{path:"fetch",component:FetchemailComponent},
{path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
