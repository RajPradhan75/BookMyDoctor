import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css'],
})
export class CreateAppointmentComponent implements OnInit {
  appointment: appointment = new appointment();
  submitted = false;

  constructor(private service: AppointmentService, private router: Router) {}

  ngOnInit(): void {}

  newAppointment(): void {
    this.submitted = false;
    this.appointment = new appointment();
  }

  save() {
    this.service.addAppointment(this.appointment).subscribe((data) => {
      console.log(data);
      this.appointment = new appointment();
      this.gotoList();
    }),
      (error) => console.log(error);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['admin-appointment']);
  }
}
