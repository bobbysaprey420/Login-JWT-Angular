import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import {NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course[];
  editCourse: Course;
  editForm: Boolean;
  newCourse: Course;
  newCourseForm: Boolean;

  constructor(private http: HttpClient, private courseService : CourseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = false;
    this.newCourseForm = false;
    this.newCourse = null;
    this.editCourse = null;
    this.getCourses();
  }

  getCourses() {
    this.courseService.getUsersFromData().subscribe(res => {
      this.course = res;
    });
  }

  showEditCourseForm(course : Course) {
    this.editForm = true;
    this.editCourse = course;
    this.newCourse = null;
    this.newCourseForm = false;
  }

  showAddCourseForm() {
    this.editCourse = null;
    this.editForm = false;
    this.newCourseForm = true;

  }

  saveCourse(form: NgForm) {
    this.courseService.newCourse(form.value).subscribe(data => {
      if(data.status == 200){
        this.newCourseForm = false;
        this.newCourse = null;
      }
      else{

      }
    });
  }


  updateCourse(form: NgForm) {
    var course_id = form.value.course_id;
    this.courseService.updateCourse(form.value, course_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editCourse = null;
        this.toastr.success('Hello world!', 'Toastr fun!');
      }
      else{

      }
    });
  }

  removeCourse(course : Course) {
    this.courseService.deleteCourse(course);
  }

  cancelEdits() {
    this.editCourse = null;
    this.editForm = false;
  }

  cancelNewCourse() {
    this.newCourse = null;
    this.newCourseForm = false;
  }
}
