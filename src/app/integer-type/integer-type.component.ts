import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { IntegerType } from '../models/integer-type';
import { IntegerTypeService } from '../services/integer-type.service';

@Component({
  selector: 'app-integer-type',
  templateUrl: './integer-type.component.html',
  styleUrls: ['./integer-type.component.css']
})
export class IntegerTypeComponent implements OnInit {

  editForm : Boolean;
  newForm : Boolean;
  data : IntegerType[];
  editData : IntegerType;

  constructor(private router : Router, private integerTypeService : IntegerTypeService, private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit() {
    this.editForm = false;
    this.newForm = false;
    this.getLectures();
  }

  getLectures() {
    this.integerTypeService.getUsersFromData().subscribe(res => {
      this.data = res;
    });
  }

  showEditForm(editData : IntegerType) {
    this.editForm = true;
    this.editData = editData;
    this.newForm = false;
  }

  showAddForm() {
    this.editForm = false;
    this.newForm = true;

  }

  newRecord(form: NgForm) {
    this.integerTypeService.newRecord(form.value).subscribe(data => {
      if(data.status == 200){
        this.newForm = false;
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

  updateRecord(form: NgForm) {
    var question_id = form.value.question_id;
    this.integerTypeService.updateRecord(form.value, question_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editData = null;
        this.toastr.success('Success', 'Integer Type Question table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeRecord(data : IntegerType) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var question_id = data.question_id;
      this.integerTypeService.deleteRecord(question_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNew();
          this.toastr.success('Success', 'Integer Type Question Deleted', { timeOut: 3000 });
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
    this.editForm = false;
    this.editData = null;
  }

  cancelNew() {
    this.newForm = false;
  }


}