import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';
import { TopicComponent } from './topic/topic.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { UserquizComponent } from './userquiz/userquiz.component';
import { UserquizanswerComponent } from './userquizanswer/userquizanswer.component';


const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path : 'course/:id/subject', component: SubjectComponent},
  { path : 'course/:id/subject/:subject_id/topic', component: TopicComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/notes', component: NotesComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/lecture', component: LectureComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz', component: QuizComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/questions', component: QuestionComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz', component: UserquizComponent},
  { path : 'course/:id/subject/:subject_id/topic/:topic_id/quiz/:quiz_id/userquiz/:user_id/answers', component: UserquizanswerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
