import { Component, OnInit } from '@angular/core';
import { UserQuiz } from '../models/userQuiz';
import { Router, ActivatedRoute } from '@angular/router';
import { UserquizService } from '../services/userquiz.service';

@Component({
  selector: 'app-userquiz',
  templateUrl: './userquiz.component.html',
  styleUrls: ['./userquiz.component.css']
})
export class UserquizComponent implements OnInit {

  users : UserQuiz[];
  topic_id: String;
  course_id: String;
  subject_id: String;
  quiz_id : String;

  constructor(private router : Router, private userquizService : UserquizService, private route: ActivatedRoute) {
    this.topic_id =  this.route.snapshot.paramMap.get('topic_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');
    this.quiz_id =  this.route.snapshot.paramMap.get('quiz_id');
   }

  ngOnInit() {
    this.getData();
    
  }

  getData() {
    this.userquizService.getUsersFromQuizAnswers(this.quiz_id).subscribe(res => {
      this.users = res;
      console.log(this.users[0])
    });
  }


  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject', this.subject_id, 'topic', this.topic_id, 'quiz']);
  }
}
