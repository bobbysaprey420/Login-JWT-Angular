import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleChoice } from '../models/single-choice';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class SingleChoiceService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(): Observable<SingleChoice[]> {
    return this.http.get<SingleChoice[]>( this.vault.apiDomain + '/question/fetch-single-choice-question/');
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/question/insert-single-choice-question', data, {observe: 'response'});
  }

  updateRecord(data, question_id: Number) {
    return this.http.post( this.vault.apiDomain + '/question/update-single-choice-question/' + question_id, data, {observe: 'response'});
  }

  deleteRecord(question_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/question/delete-single-choice-question/' + question_id,  {observe: 'response'});
  }
}
