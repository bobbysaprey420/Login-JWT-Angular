import { Injectable } from '@angular/core';
import { DirectOrder } from '../models/direct-order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})


export class DirectOrderService {
    constructor(private http: HttpClient, private vault : VaultService) {

   }

   getUsersFromData(): Observable<DirectOrder[]> {
     return this.http.get<DirectOrder[]>( this.vault.apiDomain + '/all-direct-orders');
   }

   newDirectOrder(data) {
     return this.http.post( this.vault.apiDomain + '/post-direct-order', data, {observe: 'response'});
   }

   updateDirectOrder(data, order_id) {
     return this.http.put( this.vault.apiDomain + '/update-direct-order-status-code-message/' + order_id, data, {observe: 'response'});
   }

  // deleteProduct(medicine_id: Number) {
  //   return this.http.delete( this.vault.apiDomain + '/delete-medicine/' + medicine_id,  {observe: 'response'});
  // }
 }
