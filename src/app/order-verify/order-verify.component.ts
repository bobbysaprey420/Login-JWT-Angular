import { Component, OnInit } from '@angular/core';
import { Orders } from '../models/orders';
import { OrdersService } from '../services/orders.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-verify',
  templateUrl: './order-verify.component.html',
  styleUrls: ['./order-verify.component.css']
})
export class OrderVerifyComponent implements OnInit {
  orders: Orders[];
  ordernext: Orders;
  id:String;
    verify1: Boolean;
    verify2: Boolean;
    verify3: Boolean;
    verify4: Boolean;
    verify5: Boolean;
    verify6: Boolean;
    verify7: Boolean;
    verify8: Boolean;
    //temp=DirectOrder.order_id;
  constructor(private http: HttpClient, private ordersService : OrdersService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.ordernext=null;
    this.getOrders();
  }
  getOrders() {
    this.ordersService.getUsersFromData().subscribe(res => {
      this.orders = res;

    },
  err=>{
    console.log(err);
  });
  }

  AVerified(orders : Orders, id: Number){

    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=1;
    this.ordernext.status_message="Address Verified";
    this.verify1=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){

        this.toastr.success('Success', 'Address Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  AnotVerified(orders : Orders, id: Number){

    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Address Not Verified";
    this.verify1=false;
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Address Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

PVerified(orders : Orders, id: Number){
  for(let d in orders)
  {
      if(orders[d].order_id==this.id){
        this.ordernext=orders[d];
        break;
      }
  }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=2;
    this.ordernext.status_message="Prescription Verified";
    this.verify2=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Prescription Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  PnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Prescription Not Verified";
    this.verify1=false;
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Prescription Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  BVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=3;
    this.ordernext.status_message="Bill Complete";
    this.verify3=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Bill Complete', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  BnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Bill Not Complete";
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Bill Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  OVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=4;
    this.ordernext.status_message="Order Confirmed";
    this.verify4=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Order Confirmed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  OnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Order Not Confirmed";
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Order Not Confirmed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  DVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=5;
    this.ordernext.status_message="Dispatched";
    this.verify5=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Dispatched', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Not Dispatched";
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Dispatched', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  SVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=6;
    this.ordernext.status_message="Shipped";
    this.verify6=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Shipped', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  SnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Not Shipped";
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Shipped', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DeVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=7;
    this.ordernext.status_message="Delivered";
    this.verify7=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Delivered', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DenotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Not Delivered";
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Delivered', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=8;
    this.ordernext.status_message="Completed";
    this.verify8=true;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Completed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CnotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Not Completed";
    this.verify7=false;
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Completed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CaVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=9;
    this.ordernext.status_message="Order Cancel";

    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Order Cancel', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CanotVerified(orders : Orders, id: Number){
    for(let d in orders)
    {
        if(orders[d].order_id==this.id){
          this.ordernext=orders[d];
          break;
        }
    }
    var order_id = this.ordernext.order_id;
    this.ordernext.status_code=-1;
    this.ordernext.status_message="Order Not Cancel";
    this.verify8=false;
    this.ordersService.updateOrders(this.ordernext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', ' Order Not Cancel', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

}
