import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {



  id:any;
  doctor:Doctor;
  updateForm:FormGroup;

  constructor(private route: ActivatedRoute, private router: Router,private doctorservice: DoctorService,private formbuilder:FormBuilder) {

   }

  ngOnInit() {
     this.doctor = new Doctor();
  }

  updateDoctor(){
    this.doctorservice.updateDoctor( this.doctor)
    .subscribe(data =>{
      console.log(data);
      this.doctor = new Doctor();

      window.location.reload();

    })
    this.gotoList();
  }



  onSubmit(){
    this.updateDoctor();
  }

  gotoList() {
    this.router.navigate(['doctor']);
  }
}

