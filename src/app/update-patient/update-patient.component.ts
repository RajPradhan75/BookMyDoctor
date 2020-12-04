import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {



  id:number;
  patient:Patient;

  constructor(private route: ActivatedRoute, private router: Router,private adminservie: AdminService) { }

  ngOnInit(): void {
    this.patient = new Patient();

  }

  updatePatient(){
    this.adminservie.updatePatientRecord(this.patient)
    .subscribe(data =>{
      console.log(data);
      this.patient = new Patient();
    })
    this.gotoList();
  }

  onSubmit(){
    this.updatePatient();
  }

  gotoList() {
    this.router.navigate(['/patientpage']);
  }

}
