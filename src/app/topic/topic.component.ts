import { Component, OnInit } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicService } from '../services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic[];
  editData: Topic;
  editForm: Boolean;
  newData: Topic;
  newForm: Boolean;
  subject_id: String;
  course_id: String;

  constructor(private router : Router, private topicService : TopicService, private route: ActivatedRoute, private toastr: ToastrService) {
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.course_id =  this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newForm = false;
    this.subject_id = this.route.snapshot.paramMap.get('subject_id');
    this.getData();
  }

  getData() {
    this.topicService.getTopics(this.subject_id).subscribe(res => {
      this.topic = res;
    });
  }

  showEditForm(editData : Topic) {
    this.editForm = true;
    this.editData = editData;
    this.newForm = false;
  }

  showAddForm() {
    this.editForm = false;
    this.newForm = true;
  }

  saveData(form: NgForm) {
    this.topicService.newTopic(form.value, this.subject_id).subscribe(data => {
      if(data.status == 200){
        this.newForm = false;
        this.newData = null;
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
    var topic_id = form.value.topic_id;
    this.topicService.updateTopic(form.value, topic_id).subscribe(data => {
      if(data.status == 200){
        this.editForm = false;
        this.editData = null;
        this.toastr.success('Success', 'Topic table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeData(topic : Topic) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var topic_id = topic.topic_id;
      this.topicService.deleteTopic(topic_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEdits();
          this.cancelNewForm();
          this.toastr.success('Success', 'Topic Deleted', { timeOut: 3000 });
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

  cancelNewForm() {
    this.newForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject']);
  }
}