import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { Router, RouterModule } from '@angular/router';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

import { DoctorsearchPipe } from './doctorsearch.pipe';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { EditformComponent } from './editform/editform.component';
import { CommonModule } from '@angular/common';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
// import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    DoctorListComponent,
    DoctorDetailsComponent,
    UpdateDoctorComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PatientRegistrationComponent,
    PatientPageComponent,
    DoctorLoginComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    CreatepatientComponent,
    UpdatePatientComponent,
    SearchDoctorComponent,
    DoctorsearchPipe,
    AppointmentsComponent,
    EditformComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    AppointmentPageComponent,
    CreateAppointmentComponent,
    // UpdateAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
