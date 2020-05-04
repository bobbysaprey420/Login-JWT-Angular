import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  editForm : Boolean;
  newForm : Boolean;
  data : Question[];
  editData : Question;
  quiz_id : String;
  topic_id: String;
  subject_id : String;
  course_id : String;
  constructor(private router : Router, private questionService : QuestionService, private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit() {
    this.editForm = false;
    this.newForm = false;
    this.topic_id = this.route.snapshot.paramMap.get('topic_id');
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.quiz_id =  this.route.snapshot.paramMap.get('quiz_id');
    this.getLectures();
  }

  getLectures() {
    this.questionService.getUsersFromData(this.quiz_id).subscribe(res => {
      this.data = res;
    });
  }

  showEditForm(editData : Question) {
    this.editForm = true;
    this.editData = editData;
    this.newForm = false;
  }

  showAddForm() {
    this.editForm = false;
    this.newForm = true;

  }

  saveData(form: NgForm) {
    this.questionService.newRecord(form.value).subscribe(data => {
      if(data.status == 200){
        this.newForm = false;
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

  updateData(form: NgForm) {
    var question_id = form.value.question_id;
    this.questionService.updateRecord(form.value, question_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editData = null;
        this.toastr.success('Success', 'Question table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeData(data : Question) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var question_id = data.question_id;
      this.questionService.deleteRecord(question_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNew();
          this.toastr.success('Success', ' Question Deleted', { timeOut: 3000 });
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
    this.editData = null;
  }

  cancelNew() {
    this.newForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz']);
  }
}
