import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { EditformComponent } from './editform/editform.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

import { PatientPageComponent } from './patient-page/patient-page.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: DoctorListComponent },
  { path: 'add', component: CreateDoctorComponent },

  { path: 'update', component: UpdateDoctorComponent },
  { path: 'details/:id', component: DoctorDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'patient', component: PatientRegistrationComponent },
  { path: 'patientpage', component: PatientPageComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'patientdashboard/:id', component: PatientDashboardComponent },

  { path: 'update-patient', component: UpdatePatientComponent },
  { path: 'search-doctor', component: SearchDoctorComponent },
  { path: 'doctor-dashboard/:id', component: DoctorDashboardComponent },
  { path: 'appointment/:id', component: AppointmentsComponent },
  { path: 'editdoctor/:id', component: EditformComponent },
  { path: 'admin-appointment', component: AppointmentPageComponent },
  { path: 'add-appointment', component: CreateAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
