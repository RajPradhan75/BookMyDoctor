import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent implements OnInit {
  doctorId: any;
  doctors: any;

  appointmentForm: any;
  id;
  details;
  doctorName;
  appointments: any = [];
  message;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private formbuilder: FormBuilder,
    private service: DoctorService
  ) {
    activated.params.subscribe((data) => {
      this.id = data;
      console.log(this.id.id);
    });
  }

  ngOnInit() {
    // this.details = {
    //   doctorId: 2,
    // };
    // this.service.getDoctorIdData(this.details).subscribe((response) => {
    //   this.details = response;
    //   console.log(this.details);
    //   // // this.appointments = response['data'];
    //   if (response['data'] != null) {
    //     this.appointments = response['data'];
    //     console.log(this.appointments);
    //   } else {
    //     this.details = null;
    //     this.message = 'You have No appointments!';
    //     console.log(response);
    //   }
    // });
  }
  manageappointments(id) {
    this.details = {
      doctorId: id,
    };

    this.service.getDoctorIdData(this.details).subscribe((response) => {
      this.details = response;
      console.log(this.details);
      // // this.appointments = response['data'];

      if (response['data'] != null) {
        this.appointments = response['data'];
        console.log(this.appointments);
      } else {
        this.details = null;
        this.message = 'You have No appointments!';
        console.log(response);
      }
    });
  }

  // deleteappointmentData(id) {
  //   this.service.deleteappointmentData(id).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  delete(
    appointmentId,
    doctorId,
    doctorName,
    doctorSpeciality,
    patientId,
    patientName,
    date,
    time
  ) {
    this.appointments = {
      appointmentId: appointmentId,
      doctorId: doctorId,
      doctorName: doctorName,
      doctorSpeciality: doctorSpeciality,
      patientId: patientId,
      patientName: patientName,
      date: date,
      time: time,
    };

    console.log('working');
    this.service.deleteappointmentData(appointmentId).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }
  backpage() {
    window.location.reload();
  }
}
