import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorResponse } from '../doctor-response';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css'],
})
export class EditformComponent implements OnInit {
  doctorId;
  doctors: any;
  doctorForm: FormGroup;
  id;
  details;
  constructor(
    private service: DoctorService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.activatedRouter.params.subscribe((data) => {
      this.id = data;
      console.log(data);
    });
    activatedRouter.queryParams.subscribe((data) => {
      this.doctors = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.doctorForm = this.formbuilder.group({
      doctorId: this.formbuilder.control('', [Validators.required]),
      doctorName: this.formbuilder.control('', [Validators.required]),
      doctorSpeciality: this.formbuilder.control('', [Validators.required]),
      doctorProfile: this.formbuilder.control('', [Validators.required]),
      doctorQualification: this.formbuilder.control('', [Validators.required]),
      doctorEmail: this.formbuilder.control('', [Validators.required]),
      doctorPassword: this.formbuilder.control('', [Validators.required]),
    });
  }

  updateData(doctorId, doctorForm) {
    this.details = {
      doctorId: doctorId,
      doctorName: doctorForm.doctorName,
      doctorSpeciality: doctorForm.doctorSpeciality,
      doctorProfile: doctorForm.doctorProfile,
      doctorQualification: doctorForm.doctorQualification,
      doctorEmail: doctorForm.doctorQualification,
      doctorPassword: doctorForm.doctorPassword,
    };
    this.service.editDoctor(this.details).subscribe((data) => {
      window.location.reload();
      alert('Doctor data updated');
    });
  }
}
