import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private loginUrl = 'http://localhost:8080/Adminlogin';

  private baseUrlpatient = 'http://localhost:8080/patient';
  private baseUrlpatients = 'http://localhost:8080/patients';

  constructor(private http: HttpClient) {}

  //login
  AdminLoginData(admin: Object): Observable<Object> {
    return this.http.put(`${this.loginUrl}`, admin);
  }
  getPatientsList(): Observable<any> {
    return this.http.get(`${this.baseUrlpatients}`);
  }

  createPatientRecord(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlpatient}`, patient);
  }

  updatePatientRecord(patient: Object): Observable<Object> {
    return this.http.put(`${this.baseUrlpatient}`, patient);
  }

  deletePatientRecord(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrlpatient}/${id}`);
  }
}
