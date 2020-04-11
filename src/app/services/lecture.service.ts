import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecture } from '../models/lecture';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromData(subject_id : String): Observable<Lecture[]> {
    return this.httpClient.get<Lecture[]>('http://localhost:3000/lecture/fetch-lecture-by-subjectid-premium-users/'+ subject_id);
  }

  newLecture(lecture: Lecture) {
    
  }

  updateLecture(lecture: Lecture) {
    /* var data = {
      course_name : course.course_name,
      description : course.description,
      priority    : course.priority
    }
    var url = 'http://localhost:3000/course/update-course/' + course.course_id;
    return this.httpClient.post(url, data); */
  }

  deleteLecture(lecture: Lecture) {

  }

}