import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { FetchemailComponent } from './fetchemail/fetchemail.component';
import { ApiServiceeService } from './api-servicee.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    SendemailComponent,
    FetchemailComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ApiServiceeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
