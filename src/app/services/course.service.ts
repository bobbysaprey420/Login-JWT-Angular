import { Injectable } from '@angular/core';
import { Course} from '../models/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CourseService {
    constructor(private http: HttpClient) {

   }

  getUsersFromData(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/course/fetch-courses');
  }

  newCourse(data) {
    return this.http.post('http://localhost:3000/course/insert-course', data, {observe: 'response'});
  }

  updateCourse(data, course_id) {
    return this.http.post('http://localhost:3000/course/update-course/' + course_id, data, {observe: 'response'});
  }

  deleteCourse(course: Course) {

  }
}
