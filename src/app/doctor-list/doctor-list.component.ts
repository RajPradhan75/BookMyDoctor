import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent implements OnInit {
  doctors: Observable<Doctor[]>;
  doctor: any;
  doctorId;

  constructor(private doctorservice: DoctorService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.doctorservice.getDoctorList().subscribe((response) => {
      this.doctors = response['data'];
      console.log(response);
    });
  }

  deleteDoctor(id: number) {
    this.doctorservice.deleteDoctor(id).subscribe((data) => {
      console.log(data);
    }),
      window.location.reload();
    (error) => console.log(error);
  }

  doctorDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateDoctor() {
    this.router.navigate(['update']);
  }

  onUpdate(
    doctorId,
    doctorName,
    doctorSpeciality,
    doctorProfile,
    doctorQualification,
    doctorEmail,
    doctorPassword
  ) {
    this.router.navigateByUrl(`editdoctor/${doctorId}`, {
      queryParams: {
        doctorName: doctorName,
        doctorSpeciality: doctorSpeciality,
        doctorProfile: doctorProfile,
        doctorQualification: doctorQualification,
        doctorEmail: doctorEmail,
        doctorPassword: doctorPassword,
      },
    });
  }

  // adddoctor

  addDoctor() {
    this.router.navigate(['add']);
  }
  //doctor list
  list() {}
}
