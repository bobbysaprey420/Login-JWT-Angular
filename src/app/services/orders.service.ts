import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})


export class OrdersService {
    constructor(private http: HttpClient, private vault : VaultService) {

   }

   getUsersFromData(): Observable<Orders[]> {
     return this.http.get<Orders[]>( this.vault.apiDomain + '/cart/all-orders');
   }


   updateOrders(data, order_id) {
     return this.http.put( this.vault.apiDomain + '/cart/update-orders-status-code-message/' + order_id, data, {observe: 'response'});
   }

 }
