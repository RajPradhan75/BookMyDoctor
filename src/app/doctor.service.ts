import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private baseUrl = 'http://localhost:8080/doctors';
  private baseUrl1 = 'http://localhost:8080/doctor';
  private loginUrl = 'http://localhost:8080/Doctorlogin';
  private appointmenturl = 'http://localhost:8080/getdoctorid';
  private appointmentget = 'http://localhost:8080/appointments';
  private appointmentupdate = 'http://localhost:8080/appointment';
  private deleteappointment = 'http://localhost:8080/deleteappointment';

  constructor(private http: HttpClient) {}

  getDoctorById(id: number): any {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  //inserting & retrieving doctorId data

  getDoctorIdData(form) {
    console.log(form); //
    return this.http.post(`${this.appointmenturl}`, form);
  }

  //retreive appointment data

  getAppointmentData() {
    return this.http.get(`${this.appointmentget}`);
  }

  //update appointment data

  updateAppointmentData(data) {
    return this.http.get(`${this.appointmentupdate}`, data);
  }

  //delete appointment data

  deleteappointmentData(id: number) {
    return this.http.delete(`${this.deleteappointment}/${id}`);
  }

  //delete appointment
  // deleteDataFromAPI3(id) {
  //   // let dbname = "/AppointmentRegController/delete";
  //   return this.httpClient.delete(`${this.httpURL2}/${id}`);
  // }
  // }

  createDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, doctor);
  }

  updateDoctor(doctor: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl1}`, doctor);
  }

  editDoctor(data) {
    return this.http.put(`${this.baseUrl1}`, data);
  }

  getDoctorList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${id}`);
  }

  //login
  doctorLoginData(regForm) {
    return this.http.put(`${this.loginUrl}`, regForm);
  }
}
