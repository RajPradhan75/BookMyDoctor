import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  regForm:FormGroup;


  constructor(private doctorservice: DoctorService,private router:Router,private route: ActivatedRoute,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      doctorEmail:this.formbuilder.control('',[Validators.required]),
      doctorPassword:this.formbuilder.control('',[Validators.required]),
    })

  }

  loginDataToService(regForm) {
    this.doctorservice.doctorLoginData(regForm).subscribe((data) => {
      console.log(regForm);
      if (data!=null) {
        localStorage.setItem("user","123456");
        this.router.navigate([`doctor-dashboard/${data['data'].doctorId}`]);
      }
      else {
        alert("Please Enter Correct Email ID / Password");
      }
      console.log(data['data'].doctorId);
    });
  }


}
