import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  submitted = false;

  constructor(private doctorservice:DoctorService,private router: Router) { }

  ngOnInit(): void {
  }

  newDoctor():void{
    this.submitted = false;
    this.doctor = new Doctor();
  }


  save(){
    this.doctorservice.createDoctor(this.doctor).subscribe(data =>{
      console.log(data);
      this.doctor = new Doctor();
      this.gotoList();
    }),
    error => console.log(error);

  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/doctors']);
  }

}
