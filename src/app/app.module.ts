import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicComponent } from './topic/topic.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { UserquizComponent } from './userquiz/userquiz.component';
import { UserquizanswerComponent } from './userquizanswer/userquizanswer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SubjectComponent,
    LectureComponent,
    NotesComponent,
    TopicComponent,
    QuizComponent,
    QuestionComponent,
    UserquizComponent,
    UserquizanswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
