import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  apiDomain : String
  constructor() {
    this.apiDomain = "http://ec2-15-206-153-117.ap-south-1.compute.amazonaws.com:3000"
   }
}
