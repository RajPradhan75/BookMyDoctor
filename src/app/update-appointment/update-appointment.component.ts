// import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from '../doctor.service';

// @Component({
//   selector: 'app-update-appointment',
//   templateUrl: './update-appointment.component.html',
//   styleUrls: ['./update-appointment.component.css']
// })
// export class UpdateAppointmentComponent implements OnInit {

//   doctorId: any;
//   doctors: any;
//   appointmentForm: any;
//   id;
//   details;
//   doctorName;
//   appointments: any = [];
//   message;

//   constructor(
//     private router: Router,
//     private activated: ActivatedRoute,
//     private formbuilder: FormBuilder,
//     private service: DoctorService
//   ) {
//     activated.params.subscribe((data) => {
//       this.id = data;
//       console.log(this.id.id);
//     });
//   }

//   ngOnInit(): void {
//   }

//   updateData(doctorId, doctorName, doctorSpeciality, appointmentForm) {
//     this.details = {
//       doctorId: doctorId,
//       doctorName: doctorName,
//       doctorSpeciality: doctorSpeciality,
//       patientId: appointmentForm.patientId,
//       patientName: appointmentForm.patientName,
//       description: appointmentForm.description,
//       date: appointmentForm.date,
//       time: appointmentForm.time,
//     };
//     this.appointmentservice
//       .postAppointment(this.details)
//       .subscribe((data) => {});
//   }

// }
