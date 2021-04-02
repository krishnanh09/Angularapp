import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiledHomeComponent } from './Filed/components/filed-home/filed-home.component';
import { PaymentComponent } from './Filed/components/payment/payment.component';
import { UserDataComponent } from './Filed/components/user-data/user-data.component';


const routes: Routes = [
 { path:'', component:FiledHomeComponent},
 {path:'pay', component:PaymentComponent},
  {path:'user', component:UserDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
