import { Component, OnInit } from '@angular/core';
import { DirectOrder } from '../models/direct-order';
import { DirectOrderService } from '../services/direct-order.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  directOrder: DirectOrder[];
  directnext: DirectOrder;
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
  constructor(private http: HttpClient, private directOrderService : DirectOrderService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.directnext=null;
    this.getDirectOrders();
  }
  getDirectOrders() {
    this.directOrderService.getUsersFromData().subscribe(res => {
      this.directOrder = res;

    },
  err=>{
    console.log(err);
  });
  }

  AVerified(direct : DirectOrder, id: Number){

    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }

    var order_id = this.directnext.order_id;
    this.directnext.status_code=1;
    this.directnext.status_message="Address Verified";
    this.verify1=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){

        this.toastr.success('Success', 'Address Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  AnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Address Not Verified";
    this.verify1=false;
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Address Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  PVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=2;
    this.directnext.status_message="Prescription Verified";
    this.verify2=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Prescription Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  PnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Prescription Not Verified";
    this.verify1=false;
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Prescription Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  BVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=3;
    this.directnext.status_message="Bill Complete";
    this.verify3=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Bill Complete', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  BnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Bill Not Complete";
    this.verify2=false;
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Bill Not Verified', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  OVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=4;
    this.directnext.status_message="Order Confirmed";
    this.verify4=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Order Confirmed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  OnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Order Not Confirmed";
    this.verify3=false;
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Order Not Confirmed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  DVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=5;
    this.directnext.status_message="Dispatched";
    this.verify5=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Dispatched', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Not Dispatched";
    this.verify4=false;
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Dispatched', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }
  SVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=6;
    this.directnext.status_message="Shipped";
    this.verify6=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Shipped', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  SnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Not Shipped";
    this.verify5=false;
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Shipped', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DeVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=7;
    this.directnext.status_message="Delivered";
    this.verify7=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Delivered', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  DenotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Not Delivered";
    this.verify6=false;
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Delivered', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=8;
    this.directnext.status_message="Completed";
    this.verify8=true;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Completed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CnotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Not Completed";
    this.verify7=false;
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', 'Not Completed', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CaVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=9;
    this.directnext.status_message="Order Cancel";

    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.success('Success', 'Order Cancel', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

  CanotVerified(direct : DirectOrder, id: Number){
    for(let d in direct)
    {
        if(direct[d].order_id==this.id){
          this.directnext=direct[d];
          break;
        }
    }
    var order_id = this.directnext.order_id;
    this.directnext.status_code=-1;
    this.directnext.status_message="Order Not Cancel";
    this.verify8=false;
    this.directOrderService.updateDirectOrder(this.directnext, order_id).subscribe(data => {

      if(data.status == 200){
        this.toastr.error('Failed', ' Order Not Cancel', { timeOut: 3000 });
        this.ngOnInit();
      }
    });
  }

}
