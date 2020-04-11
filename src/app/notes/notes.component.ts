import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Notes } from '../models/Notes';
import { NotesService } from '../services/notes.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Notes[];
  editNotes: Notes;
  editForm: Boolean;
  newNotes: Notes;
  newNotesForm: Boolean;
  lecture_id: String;
  course_id: String;
  subject_id: String;

  constructor(private router : Router, private notesService : NotesService, private route: ActivatedRoute) {
    this.lecture_id =  this.route.snapshot.paramMap.get('lecture_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');

   }

  ngOnInit() {
    this.editForm = false;
    this.newNotesForm = false;
    this.getNotes();
  }

  getNotes() {
    this.notesService.getUsersFromData(this.lecture_id).subscribe(res => {
      this.notes = res;
    });
  }

  showEditNotesForm(editNotes : Notes) {
    this.editForm = true;
    this.editNotes = editNotes;
    this.newNotesForm = false;
  }

  showAddNotesForm() {
    this.editForm = false;
    this.newNotesForm = true;

  }

  saveNotes(form: NgForm) {
    console.log(form.value)
    this.notesService.newNotes(this.newNotes);
    this.newNotesForm = false;
  }

  updateNotes(form: NgForm) {
    console.log(form.value)
    this.notesService.updateNotes(this.editNotes);
    this.editForm = false;
  }

  removeNotes(notes : Notes) {
    this.notesService.deleteNotes(notes);
  }

  cancelEdits() {
    this.editForm = false;
  }

  cancelNewNotes() {
    this.newNotesForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'lecture']);
  }
}

