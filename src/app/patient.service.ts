import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/patient';
  private baseUrl1 = 'http://localhost:8080/patients';
  private login = 'http://localhost:8080/Patientlogin';
  private appointmenturl = 'http://localhost:8080/appointment';

  private appointmenturl1 = 'http://localhost:8080/getpatientid';

  constructor(private http: HttpClient) {}

  registerPatient(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patient);
  }

  //login
  PatientLoginData(regForm) {
    return this.http.put(`${this.login}`, regForm);
  }

  postAppointment(data): Observable<any> {
    return this.http.post(`${this.appointmenturl}`, data);
  }

  //inserting & retrieving doctorId data

  getPatientIdData(form) {
    console.log(form); //2
    return this.http.post(`${this.appointmenturl1}`, form);
  }

  // addDataToAPI3(regForm) {
  //   console.log(regForm.patient_id+" "+"service");
  //   let dbname = "/AppointmentRegController/insert";
  //   return this.httpClient.post(`${this.httpURL}` + dbname, regForm);
  // }
}
