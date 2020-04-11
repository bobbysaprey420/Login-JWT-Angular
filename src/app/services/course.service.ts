import { Injectable } from '@angular/core';
import { Course} from '../models/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})


export class CourseService {
    constructor(private http: HttpClient, private vault : VaultService) {

   }

  getUsersFromData(): Observable<Course[]> {
    return this.http.get<Course[]>( this.vault.apiDomain + '/course/fetch-courses');
  }

  newCourse(data) {
    return this.http.post( this.vault.apiDomain + '/course/insert-course', data, {observe: 'response'});
  }

  updateCourse(data, course_id) {
    return this.http.post( this.vault.apiDomain + '/course/update-course/' + course_id, data, {observe: 'response'});
  }

  deleteCourse(course_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/course/delete-course/' + course_id,  {observe: 'response'});
  }
}
