import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../models/subject';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

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

  constructor(private router : Router, private subjectService : SubjectService, private route: ActivatedRoute) {
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
    console.log(form.value)
    this.subjectService.newSubject(this.newSubject);
    this.newSubjectForm = false;
  }

  updateSubject(form: NgForm) {
    console.log(form.value)
    this.subjectService.updateSubject(this.editSubject);
    this.editForm = false;
  }

  removeSubject(Subject : Subject) {
    this.subjectService.deleteSubject(Subject);
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



