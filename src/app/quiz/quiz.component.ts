import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

 
  quiz: Quiz[];
  editQuiz: Quiz;
  editForm: Boolean;
  newForm: Boolean;
  topic_id: String;
  course_id: String;
  subject_id: String;

  constructor(private router : Router, private quizService : QuizService,  private toastr: ToastrService, private route: ActivatedRoute) {
    this.topic_id =  this.route.snapshot.paramMap.get('topic_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newForm = false;
    this.getData();
  }

  getData() {
    this.quizService.getUsersFromData(this.topic_id).subscribe(res => {
      this.quiz = res;
    });
  }

  showEditForm(editQuiz : Quiz) {
    this.editForm = true;
    this.editQuiz = editQuiz;
    this.newForm = false;
  }

  showAddForm() {
    this.editForm = false;
    this.newForm = true;

  }

  saveNotes(form: NgForm) {
    this.quizService.newQuiz(form.value, this.topic_id).subscribe(data => {
      if(data.status == 200){
        this.newForm = false;
        this.editQuiz = null;
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
    var quiz_id = form.value.quiz_id;
    console.log(form.value)
    this.quizService.updateQuiz(form.value, quiz_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editQuiz = null;
        this.toastr.success('Success', 'Quiz table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeData(quiz : Quiz) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var quiz_id = quiz.quiz_id;
      this.quizService.deleteQuiz(quiz_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewNotes();
          this.toastr.success('Success', 'Quiz Deleted', { timeOut: 3000 });
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
    this.newForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic']);
  }
}

