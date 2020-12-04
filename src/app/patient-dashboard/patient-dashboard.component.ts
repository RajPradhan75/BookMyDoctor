import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
})
export class PatientDashboardComponent implements OnInit {
  patientId: any;
  patients: any;
  appointmentForm: any;
  id;
  details;
  patientName;
  appointments: any = [];
  message;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private formbuilder: FormBuilder,
    private service: PatientService
  ) {
    activated.params.subscribe((data) => {
      this.id = data;
      console.log(this.id.id);
    });
  }

  ngOnInit(): void {}

  viewappointments(id) {
    this.details = {
      patientId: id,
    };

    this.service.getPatientIdData(this.details).subscribe((response) => {
      this.details = response;
      console.log(this.details);
      // // this.appointments = response['data'];

      if (response['data'] != null) {
        this.appointments = response['data'];
        console.log(this.appointments);
      } else {
        this.details = null;
        alert('you have no appointments');
        this.message = 'You have No appointments!';
        console.log(this.message);
      }
    });
  }

  backpage() {
    window.location.reload();
  }

  searchDoctor() {
    this.router.navigateByUrl('search-doctor');
  }
}
