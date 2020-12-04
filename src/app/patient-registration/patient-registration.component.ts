import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {


  patient: Patient = new Patient();
  submitted = false;

  constructor(private patientservice:PatientService,private router: Router) { }

  ngOnInit(): void {
  }

  newDoctor():void{
    this.submitted = false;
    this.patient = new Patient();
  }


  save(){
    this.patientservice.registerPatient(this.patient).subscribe(data =>{
      console.log(data);
      this.patient = new Patient();
    }),
    error => console.log(error);

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }



}
