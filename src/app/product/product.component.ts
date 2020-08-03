import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];
  editProduct: Product;
  editForm: Boolean;
  newProductForm: Boolean;

  constructor(private http: HttpClient, private productService : ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = false;
    this.newProductForm = false;
    this.editProduct = null;
    this.getProducts();
  }

  getProducts() {
    this.productService.getUsersFromData().subscribe(res => {
      this.product = res;
    },
  err=>{
    console.log(err);
  });
  }

  showEditProductForm(product : Product) {

    this.editForm = true;
    this.editProduct = product;
    this.newProductForm = false;
  }

  showAddProductForm() {
    this.editProduct = null;
    this.editForm = false;
    this.newProductForm = true;

  }

  saveProduct(form: NgForm) {
    this.productService.newProduct(form.value).subscribe(data => {
      if(data.status == 200){
        this.newProductForm = false;
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


  updateProduct(form: NgForm) {
    var medicine_id = form.value.medicine_id;
    this.productService.updateProduct(form.value, medicine_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editProduct = null;
        this.toastr.success('Success', 'Product table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeProduct(product : Product) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var medicine_id = product.medicine_id;
      this.productService.deleteProduct(medicine_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewProduct();
          this.toastr.success('Success', 'Product Deleted');
          this.ngOnInit();
        }
        else{
          console.log("Following Error - ");
          console.log(data.body);
          this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
        }
      });
    }
  }

  cancelEdits() {
    this.editProduct = null;
    this.editForm = false;
  }

  cancelNewProduct() {
    this.newProductForm = false;
  }
}
