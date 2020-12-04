import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {
  patients:Observable<Patient[]>;

  constructor(private patientservice: PatientService,private adminservice: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.adminservice.getPatientsList();
  }

  addPatient(){
    this.router.navigate(['patient']);
  }

  updatePatient(){
    this.router.navigate(['update-patient']);
  }

  deletePatient(id:number){
    this.adminservice.deletePatientRecord(id)
      .subscribe(data=>{
        console.log(data);

      }),
      window.location.reload();
      error=>console.log(error);
  }




}
