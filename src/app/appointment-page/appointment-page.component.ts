import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-page',
  templateUrl: './appointment-page.component.html',
  styleUrls: ['./appointment-page.component.css'],
})
export class AppointmentPageComponent implements OnInit {
  appointments: Observable<appointment[]>;

  constructor(private service: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.service.getAppointmentList().subscribe((response) => {
      this.appointments = response['data'];
      console.log(response);
    });
  }

  deleteappointment(id: number) {
    this.service.deleteAppointment(id).subscribe((data) => {
      console.log(data);
    }),
      window.location.reload();
  }

  addDoctor() {
    this.router.navigate(['add-appointment']);
  }
}
