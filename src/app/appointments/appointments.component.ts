import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  doctorId: any;
  doctors: any;
  appointmentForm: any;
  id;
  details;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private formbuilder: FormBuilder,
    private service: DoctorService,
    private appointmentservice: PatientService
  ) {
    activated.params.subscribe((data) => {
      this.id = data;
      console.log(data);
    });
    activated.queryParams.subscribe((data) => {
      this.doctors = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.appointmentForm = this.formbuilder.group({
      appointmentId: this.formbuilder.control('', [Validators.required]),
      doctorId: this.formbuilder.control('', [Validators.required]),
      doctorName: this.formbuilder.control('', [Validators.required]),
      doctorSpeciality: this.formbuilder.control('', [Validators.required]),
      patientId: this.formbuilder.control('', [Validators.required]),
      patientName: this.formbuilder.control('', [Validators.required]),
      description: this.formbuilder.control('', [Validators.required]),
      date: this.formbuilder.control('', [Validators.required]),
      time: this.formbuilder.control('', [Validators.required]),
    });
  }

  updateData(doctorId, doctorName, doctorSpeciality, appointmentForm) {
    this.details = {
      doctorId: doctorId,
      doctorName: doctorName,
      doctorSpeciality: doctorSpeciality,
      patientId: appointmentForm.patientId,
      patientName: appointmentForm.patientName,
      description: appointmentForm.description,
      date: appointmentForm.date,
      time: appointmentForm.time,
    };
    this.appointmentservice
      .postAppointment(this.details)
      .subscribe((data) => {});
  }
}
