import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/appointments';
  private baseurl1 = 'http://localhost:8080/appointment';

  constructor(private http: HttpClient) {}

  getAppointmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteAppointment(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl1}/${id}`);
  }

  addAppointment(appointment: Object): Observable<Object> {
    return this.http.post(`${this.baseurl1}`, appointment);
  }
}
