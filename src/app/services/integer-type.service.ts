import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntegerType } from '../models/integer-type';
import { VaultService } from './vault.service';

@Injectable({
  providedIn: 'root'
})
export class IntegerTypeService {

  constructor(private http: HttpClient, private vault : VaultService) { }

  getUsersFromData(): Observable<IntegerType[]> {
    return this.http.get<IntegerType[]>( this.vault.apiDomain + '/question/fetch-integer-type-questions/');
  }

  newRecord(data) {
    return this.http.post( this.vault.apiDomain + '/question/insert-integer-choice-question', data, {observe: 'response'});
  }

  updateRecord(data, question_id: Number) {
    return this.http.post( this.vault.apiDomain + '/question/update-integer-type-question/' + question_id, data, {observe: 'response'});
  }

  deleteRecord(question_id: Number) {
    return this.http.delete( this.vault.apiDomain + '/question/delete-integer-type-question/' + question_id,  {observe: 'response'});
  }
}
