import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiledHomeComponent } from './Filed/components/filed-home/filed-home.component';
import { LoginFormComponent } from './Filed/components/login-form/login-form.component';
import { UserDataComponent } from './Filed/components/user-data/user-data.component';
import { PaymentComponent } from './Filed/components/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    FiledHomeComponent,
    LoginFormComponent,
    UserDataComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
