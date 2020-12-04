import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  doctors: Observable<Doctor[]>;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  managedoctor() {
    this.router.navigate(['doctor']);
  }

  managerpatient() {
    this.router.navigate(['patientpage']);
  }

  appointmentPage() {
    this.router.navigate(['admin-appointment']);
  }
}
