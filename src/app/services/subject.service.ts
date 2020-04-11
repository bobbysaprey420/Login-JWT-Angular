import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromData(course_id : String): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>('http://localhost:3000/subject/fetch-subject-by-courseid-premium-users/'+ course_id);
  }

  newSubject(subject: Subject) {
    
  }

  updateSubject(subject: Subject) {
    /* var data = {
      course_name : course.course_name,
      description : course.description,
      priority    : course.priority
    }
    var url = 'http://localhost:3000/course/update-course/' + course.course_id;
    return this.httpClient.post(url, data); */
  }

  deleteSubject(sbject: Subject) {

  }
}
