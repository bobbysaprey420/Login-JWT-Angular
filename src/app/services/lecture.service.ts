import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecture } from '../models/lecture';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(subject_id : String): Observable<Lecture[]> {
    return this.http.get<Lecture[]>( this.vault.apiDomain + '/lecture/fetch-lecture-by-subjectid-premium-users/'+ subject_id);
  }

  newLecture(data, course_id, lecture_id) {
    return this.http.post( this.vault.apiDomain + '/lecture/insert-lecture/' + course_id + '/' + lecture_id, data, {observe: 'response'});
  }

  updateLecture(data, lecture_id: Number) {
    return this.http.post( this.vault.apiDomain + '/lecture/update-lecture/' + lecture_id, data, {observe: 'response'});
  }

  deleteLecture(lecture_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/lecture/delete-lecture/' + lecture_id,  {observe: 'response'});
  }

}