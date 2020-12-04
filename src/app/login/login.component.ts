import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HeaderService } from '../header.service';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientservice: PatientService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.regForm = this.formbuilder.group({
      patientEmail: this.formbuilder.control('', [Validators.required]),
      patientPassword: this.formbuilder.control('', [Validators.required]),
    });
  }

  // loginDataToService(regForm) {
  //   this.doctorservice.doctorLoginData(regForm).subscribe((data) => {
  //     console.log(regForm);
  //     if (data!=null) {
  //       localStorage.setItem("user","123456");
  //       this.router.navigate([`doctor-dashboard/${data['data'].doctorId}`]);
  //     }
  //     else {
  //       alert("Please Enter Correct Email ID / Password");
  //     }
  //     console.log(data['data'].doctorId);
  //   });
  // }

  PatientloginDataToService(regForm) {
    this.patientservice.PatientLoginData(regForm).subscribe((data) => {
      console.log(regForm);
      if (data != null) {
        localStorage.setItem('user', '123141');
        this.router.navigate([`patientdashboard/${data['data'].patientId}`]);
      } else {
        alert('Please Enter Correct Email ID / Password');
      }
    });
  }

  registerPatient() {
    this.router.navigate(['patient']);
  }
}
