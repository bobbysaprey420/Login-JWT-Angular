import { Component, OnInit } from '@angular/core';
import { Lecture } from '../models/lecture';
import { LectureService } from '../services/lecture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  lecture: Lecture[];
  editLecture: Lecture;
  editForm: Boolean;
  newLecture: Lecture;
  newLectureForm: Boolean;
  subject_id: String;
  course_id: String;

  constructor(private router : Router, private lectureService : LectureService, private route: ActivatedRoute, private toastr: ToastrService) {
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newLectureForm = false;
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.getLectures();
  }

  getLectures() {
    this.lectureService.getUsersFromData(this.subject_id).subscribe(res => {
      this.lecture = res;
    });
  }

  showEditLectureForm(editLecture : Lecture) {
    this.editForm = true;
    this.editLecture = editLecture;
    this.newLectureForm = false;
  }

  showAddLectureForm() {
    this.editForm = false;
    this.newLectureForm = true;

  }

  saveLecture(form: NgForm) {
    this.lectureService.newLecture(form.value, this.course_id, this.subject_id).subscribe(data => {
      if(data.status == 200){
        this.newLectureForm = false;
        this.newLecture = null;
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

  updateLecture(form: NgForm) {
    var lecture_id = form.value.lecture_id;
    this.lectureService.updateLecture(form.value, lecture_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editLecture = null;
        this.toastr.success('Success', 'Lecture table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeLecture(lecture : Lecture) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var lecture_id = lecture.lecture_id;
      this.lectureService.deleteLecture(lecture_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewLecture();
          this.toastr.success('Success', 'Lecture Deleted', { timeOut: 3000 });
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
    this.editLecture = null;
  }

  cancelNewLecture() {
    this.newLectureForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject']);
  }
}

