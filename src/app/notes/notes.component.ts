import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Notes } from '../models/notes';
import { NotesService } from '../services/notes.service'
import { ToastrService } from 'ngx-toastr';


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

  constructor(private router : Router, private notesService : NotesService,  private toastr: ToastrService, private route: ActivatedRoute) {
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
    this.notesService.newNotes(form.value, this.lecture_id).subscribe(data => {
      if(data.status == 200){
        this.newNotesForm = false;
        this.newNotes = null;
        this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  updateNotes(form: NgForm) {
    var notes_id = form.value.notes_id;
    this.notesService.updateNotes(form.value, notes_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editNotes = null;
        this.toastr.success('Success', 'Notes table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeNotes(notes : Notes) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var notes_id = notes.notes_id;
      this.notesService.deleteNotes(notes_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewNotes();
          this.toastr.success('Success', 'Notes Deleted', { timeOut: 3000 });
          this.ngOnInit();
        }
        else{
          console.log("Following Error - ");
          console.log(data.body);
          this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
        }
      });
    }
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

