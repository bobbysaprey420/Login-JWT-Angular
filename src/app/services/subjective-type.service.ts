import { Injectable } from '@angular/core';
import { SubjectiveType } from '../models/subjective-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectiveTypeService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(): Observable<SubjectiveType[]> {
    return this.http.get<SubjectiveType[]>( this.vault.apiDomain + '/question/fetch-subjective-type-questions/');
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/question/insert-subjective-choice-question', data, {observe: 'response'});
  }

  updateRecord(data, question_id: Number) {
    return this.http.post( this.vault.apiDomain + '/question/update-subjective-type-question/' + question_id, data, {observe: 'response'});
  }

  deleteRecord(question_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/question/delete-subjective-type-question/' + question_id,  {observe: 'response'});
  }
}