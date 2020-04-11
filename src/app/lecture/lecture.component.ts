import { Component, OnInit } from '@angular/core';
import { Lecture } from '../models/lecture';
import { LectureService } from '../services/lecture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(private router : Router, private lectureService : LectureService, private route: ActivatedRoute) {
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newLectureForm = false;
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    console.log(this.subject_id)
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
    console.log(form.value)
    this.lectureService.newLecture(this.newLecture);
    this.newLectureForm = false;
  }

  updateLecture(form: NgForm) {
    console.log(form.value)
    this.lectureService.updateLecture(this.editLecture);
    this.editForm = false;
  }

  removeLecture(lecture : Lecture) {
    this.lectureService.deleteLecture(lecture);
  }

  cancelEdits() {
    this.editForm = false;
  }

  cancelNewLecture() {
    this.newLectureForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject']);
  }
}

