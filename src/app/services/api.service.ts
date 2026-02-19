import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.API}/users/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.API}/users/login`, data);
  }

  getTasks() {
    return this.http.get(`${this.API}/tasks`, {
      headers: this.getAuthHeaders()
    });
  }

  createTask(data: any) {
    return this.http.post(`${this.API}/tasks`, data, {
      headers: this.getAuthHeaders()
    });
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API}/tasks/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  private getAuthHeaders() {
    return new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });
  }
}
