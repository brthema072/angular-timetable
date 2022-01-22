import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularTimetableComponent } from './angular-timetable/angular-timetable.component';



@NgModule({
  declarations: [
    AngularTimetableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularTimetableComponent
  ]
})
export class AngularTimetableModule { }
