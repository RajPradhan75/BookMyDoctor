import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './doctor';

@Pipe({
  name: 'doctorsearch'
})
export class DoctorsearchPipe implements PipeTransform {

  transform(doctor,search:string): any  {
    if(search)
       {

       return doctor.filter(doctors=>
         {
         return doctors.doctorSpeciality.toLowerCase().includes(search.toLowerCase());
         });
       }else
       {
       return doctor;
       }
      }



    }
