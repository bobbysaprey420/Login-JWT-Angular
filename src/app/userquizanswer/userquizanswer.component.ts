import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserquizanswerService } from '../services/userquizanswer.service';
import { UserQuizAnswer } from '../models/user-quiz-answer';

@Component({
  selector: 'app-userquizanswer',
  templateUrl: './userquizanswer.component.html',
  styleUrls: ['./userquizanswer.component.css']
})
export class UserquizanswerComponent implements OnInit {
  answers : UserQuizAnswer[];
  topic_id: String;
  course_id: String;
  subject_id: String;
  quiz_id : String;
  user_id : String

  constructor(private router : Router, private userquizanswerService : UserquizanswerService, private route: ActivatedRoute) {
    this.topic_id =  this.route.snapshot.paramMap.get('topic_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');
    this.quiz_id =  this.route.snapshot.paramMap.get('quiz_id');
    this.user_id =  this.route.snapshot.paramMap.get('user_id');
   }

  ngOnInit() {
    this.getData();
    
  }

  getData() {
    this.userquizanswerService.getUsersAnswers(this.quiz_id, this.user_id).subscribe(res => {
      this.answers = res;
    });
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz', this.quiz_id, 'userquiz']);
  }

}
