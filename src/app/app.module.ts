import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app-routing.module';

import { RouterModule}        from '@angular/router';
import { AlertComponent } from './components';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { fakeBackendProvider } from './helpers/fake.backend';
import { UniqueUsernameValidatorDirective } from './services/unique-username--validator.directive';
import { TimetableComponent } from './components/timetable/timetable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { FormsModule }   from '@angular/forms';
import { PlaygroundComponent } from './playground/playground.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarksComponent } from './marks/marks.component';
import { StaffComponent } from './staff/staff.component';
import { HelpComponent } from './help/help.component';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
       
        FormsModule,
        routing,
        RouterModule.forRoot([
            {path: "", component: StudentComponent},
             
                 
              
          ]),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UniqueUsernameValidatorDirective,
        TimetableComponent,
        NavbarComponent,
        StudentComponent,
        AddstudentComponent,
        PlaygroundComponent,
        MarksComponent,
        StaffComponent,
        HelpComponent
       
     
       
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }