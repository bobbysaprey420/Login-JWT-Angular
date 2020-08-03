import { Component, OnInit } from '@angular/core';
import { DirectOrder } from '../models/direct-order';
import { DirectOrderService } from '../services/direct-order.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-direct-order',
  templateUrl: './direct-order.component.html',
  styleUrls: ['./direct-order.component.css']
})
export class DirectOrderComponent implements OnInit {
  directOrder: DirectOrder[];
  editDirectOrder: DirectOrder;
  editForm: Boolean;
  newDirectOrderForm: Boolean;

    constructor(private http: HttpClient, private directOrderService : DirectOrderService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = false;
    this.newDirectOrderForm = false;
    this.editDirectOrder = null;
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

  showEditDirectOrderForm(directOrder : DirectOrder) {
    this.editForm = true;
    this.editDirectOrder = directOrder;
    this.newDirectOrderForm = false;
  }

  showAddDirectOrderForm() {
    this.editDirectOrder = null;
    this.editForm = false;
    this.newDirectOrderForm = true;
  }



  saveDirectOrder(form: NgForm) {
    this.directOrderService.newDirectOrder(form.value).subscribe(data => {
      if(data.status == 200){
        this.newDirectOrderForm = false;
        this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  updateDirectOrder(form: NgForm) {
    var order_id = form.value.order_id;
    this.directOrderService.updateDirectOrder(form.value, order_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editDirectOrder = null;
        this.toastr.success('Success', 'Direct Order table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  cancelEdits() {
    this.editDirectOrder = null;
    this.editForm = false;
  }

  cancelNewDirecrOrder() {
    this.newDirectOrderForm = false;
  }

}
