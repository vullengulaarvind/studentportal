import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './guards';
import { TimetableComponent } from './components/timetable/timetable.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { PlaygroundComponent } from './playground/playground.component';
import { MarksComponent } from './marks/marks.component';
import { StaffComponent } from './staff/staff.component';
import { HelpComponent } from './help/help.component';




const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'timetable', component: TimetableComponent },
    { path: 'student', component: StudentComponent },
    { path: 'addstudent', component: AddstudentComponent},
    { path: 'playground', component: PlaygroundComponent},
    { path: 'marks', component:MarksComponent},
    { path: 'staff', component:StaffComponent},
    { path: 'help', component:HelpComponent},
  
    
    

    


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);