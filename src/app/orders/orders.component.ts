import { Component, OnInit } from '@angular/core';
import { Orders } from '../models/orders';
import { OrdersService } from '../services/orders.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Orders[];
  editOrders: Orders;
  editForm: Boolean;
  newOrdersForm: Boolean;

  constructor(private http: HttpClient, private ordersService : OrdersService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = false;
    this.newOrdersForm = false;
    this.editOrders = null;
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


}
