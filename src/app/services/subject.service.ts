import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(course_id : String): Observable<Subject[]> {
    return this.http.get<Subject[]>( this.vault.apiDomain + '/subject/fetch-subject-by-courseid-premium-users/'+ course_id);
  }

  newSubject(data, course_id) {
    return this.http.post( this.vault.apiDomain + '/subject/insert-subject/' + course_id, data, {observe: 'response'});
  }

  updateSubject(data, subject_id) {
    return this.http.post( this.vault.apiDomain + '/subject/update-subject/' + subject_id, data, {observe: 'response'});
  }

  deleteSubject(subject_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/subject/delete-subject/' + subject_id,  {observe: 'response'});
  }
}
