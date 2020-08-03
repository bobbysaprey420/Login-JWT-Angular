import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  apiDomain : String
  constructor() {
    //this.apiDomain = "http://ec2-13-235-9-30.ap-south-1.compute.amazonaws.com:3000"
      this.apiDomain = "http://localhost:3000"

   }
}
