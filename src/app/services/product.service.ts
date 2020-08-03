import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
    constructor(private http: HttpClient, private vault : VaultService) {

   }

   getUsersFromData(): Observable<Product[]> {
     return this.http.get<Product[]>( this.vault.apiDomain + '/fetch-medicines');
   }

   newProduct(data) {
     return this.http.post( this.vault.apiDomain + '/insert-medicine', data, {observe: 'response'});
   }

   updateProduct(data, medicine_id) {
     return this.http.put( this.vault.apiDomain + '/update-medicine/' + medicine_id, data, {observe: 'response'});
   }

   deleteProduct(medicine_id: Number) {
     return this.http.delete( this.vault.apiDomain + '/delete-medicine/' + medicine_id,  {observe: 'response'});
   }
 }
