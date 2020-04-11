import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notes } from '../models/Notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromData(lecture_id : String): Observable<Notes[]> {
    return this.httpClient.get<Notes[]>('http://localhost:3000/notes/fetch-notes-by-lectureid-premium-users/'+ lecture_id);
  }

  newNotes(notes: Notes) {
    
  }

  updateNotes(notes: Notes) {
    /* var data = {
      course_name : course.course_name,
      description : course.description,
      priority    : course.priority
    }
    var url = 'http://localhost:3000/course/update-course/' + course.course_id;
    return this.httpClient.post(url, data); */
  }

  deleteNotes(notes: Notes) {

  }

}