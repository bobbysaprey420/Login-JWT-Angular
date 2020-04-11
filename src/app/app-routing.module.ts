import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { LectureComponent } from './lecture/lecture.component';
import { NotesComponent } from './notes/notes.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { SubjectiveTypeComponent } from './subjective-type/subjective-type.component';
import { IntegerTypeComponent } from './integer-type/integer-type.component';


const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path : 'course/:id/subject', component: SubjectComponent},
  { path : 'course/:id/subject/:subject_id/lecture', component: LectureComponent},
  { path : 'course/:id/subject/:subject_id/lecture/:lecture_id/notes', component: NotesComponent},
  { path : 'single-choice-question', component: SingleChoiceComponent},
  { path : 'multiple-choice-question', component: MultipleChoiceComponent},
  { path : 'subjective-type-question', component: SubjectiveTypeComponent},
  { path : 'integer-type-question', component: IntegerTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
