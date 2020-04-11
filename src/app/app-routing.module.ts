import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path : '', redirectTo : 'course', pathMatch : 'full'},
  { path : 'course/:id/subject', component: SubjectComponent},
  { path : 'course/:id/subject/:subject_id/lecture', component: LectureComponent},
  { path : 'course/:id/subject/:subject_id/lecture/:lecture_id/notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
