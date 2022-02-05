import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTimetableModule } from 'angular-timetable';

import { environment } from '../../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './presenter/components/alert/alert.component';
import { CalendarComponent } from './presenter/calendar/calendar.component';
import { ModalRegisterComponent } from './presenter/components/modal-register/modal-register.component';
import { ModalLoginComponent } from './presenter/components/modal-login/modal-login.component';
import { ModalOptionsComponent } from './presenter/components/modal-options/modal-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmTimeComponent } from './presenter/components/modal-confirm-time/modal-confirm-time.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AlertComponent,
    ModalRegisterComponent,
    ModalLoginComponent,
    ModalOptionsComponent,
    ModalConfirmTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTimetableModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
