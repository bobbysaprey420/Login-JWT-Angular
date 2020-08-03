import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectOrderComponent } from './direct-order/direct-order.component';
import { VerificationComponent } from './verification/verification.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderVerifyComponent } from './order-verify/order-verify.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DirectOrderComponent,
    VerificationComponent,
    OrdersComponent,
    OrderVerifyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter:() => {
      return localStorage.getItem('access_token');
    },
        allowedDomains: [ 'localhost:3000','ec2-13-235-9-30.ap-south-1.compute.amazonaws.com:3000'],
        disallowedRoutes: [ 'localhost:3000/admin/login', 'ec2-13-235-9-30.ap-south-1.compute.amazonaws.com:3000/admin/login']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
