import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DirectOrderComponent } from './direct-order/direct-order.component';
import { VerificationComponent } from './verification/verification.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderVerifyComponent } from './order-verify/order-verify.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path: 'medicine', component: ProductComponent,  canActivate: [AuthGuard] },
  { path: 'direct_order', component: DirectOrderComponent,  canActivate: [AuthGuard] },
  { path: 'direct_order/:id', component: VerificationComponent,  canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent,  canActivate: [AuthGuard] },
  { path: 'orders/:id', component: OrderVerifyComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
