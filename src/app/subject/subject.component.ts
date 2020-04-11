import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../models/subject';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject: Subject[];
  editSubject: Subject;
  editForm: Boolean;
  newSubject: Subject;
  newSubjectForm: Boolean;
  course_id: String;

  constructor(private router : Router, private subjectService : SubjectService, private route: ActivatedRoute, private toastr: ToastrService) {
    this.course_id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newSubjectForm = false;
    this.course_id = this.route.snapshot.paramMap.get('id');
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getUsersFromData(this.course_id).subscribe(res => {
      this.subject = res;
    });
  }

  showEditSubjectForm(editsubject : Subject) {
    this.editForm = true;
    this.editSubject = editsubject;
    this.newSubjectForm = false;
  }

  showAddSubjectForm() {
    this.editForm = false;
    this.newSubjectForm = true;

  }

  saveSubject(form: NgForm) {
    this.subjectService.newSubject(form.value, this.course_id).subscribe(data => {
      if(data.status == 200){
        this.newSubjectForm = false;
        this.newSubject = null;
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

  updateSubject(form: NgForm) {
    var subject_id = form.value.subject_id;
    this.subjectService.updateSubject(form.value, subject_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editSubject = null;
        this.toastr.success('Success', 'Subject table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeSubject(subject : Subject) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var subject_id = subject.subject_id;
      this.subjectService.deleteSubject(subject_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewSubject();
          this.toastr.success('Success', 'Subject Deleted', { timeOut: 3000 });
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
  }

  cancelNewSubject() {
    this.newSubjectForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course']);
  }
}



