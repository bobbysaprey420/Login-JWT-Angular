import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MultipleChoice } from '../models/multiple-choice';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(): Observable<MultipleChoice[]> {
    return this.http.get<MultipleChoice[]>( this.vault.apiDomain + '/question/fetch-multiple-choice-questions/');
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/question/insert-multiple-choice-question', data, {observe: 'response'});
  }

  updateRecord(data, question_id: Number) {
    return this.http.post( this.vault.apiDomain + '/question/update-multiple-choice-question/' + question_id, data, {observe: 'response'});
  }

  deleteRecord(question_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/question/delete-multiple-choice-question/' + question_id,  {observe: 'response'});
  }
}