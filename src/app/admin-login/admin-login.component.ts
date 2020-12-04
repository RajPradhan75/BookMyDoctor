import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

 admin :Admin = new Admin();

  constructor(private adminservice: AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  AdminloginDataToService() {
    this.adminservice.AdminLoginData(this.admin).subscribe((data) => {
      console.log(data);
      if (data) {
        localStorage.setItem("user","123987");
        this.router.navigateByUrl('/admin-dashboard');
      }else{
        alert("Please Enter Correct Email ID / Password");
      }
    });
  }


  onSubmit(){

    this.AdminloginDataToService();

  }

}
