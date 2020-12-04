import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css'],
})
export class SearchDoctorComponent implements OnInit {
  doctors;
  search: String;

  constructor(
    private doctorservice: DoctorService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.doctorservice.getDoctorList().subscribe((response) => {
      this.doctors = response['data'];
      console.log(response);
    });
  }

  BookDoctor(doctorId, doctorName, doctorSpeciality) {
    this.router.navigate([`appointment/${doctorId}`], {
      queryParams: {
        doctorName: doctorName,
        doctorSpeciality: doctorSpeciality,
      },
    });
  }

  // goto() {
  //   this.router.navigate(['patientdashboard/:id']);
  // }
}
