import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {


  patient: Patient = new Patient();
  submitted = false;

  constructor(private adminservice:AdminService, private router:Router) { }

  ngOnInit(): void {
  }

  newDoctor():void{
    this.submitted = false;
    this.patient = new Patient();
  }


  save(){
    this.adminservice.createPatientRecord(this.patient).subscribe(data =>{
      console.log(data);
      this.patient= new Patient();
      this.gotoList();
    }),
    error => console.log(error);

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/patientpage']);
  }

}
