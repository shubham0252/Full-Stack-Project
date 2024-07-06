import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

const BASE_URL = ["http://localhost:9090/"]

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  register(signRequest:any): Observable<any>{
    return this.http.post(BASE_URL+'signup', signRequest)
  }

  login(loginRequest:any): Observable<any>{
    return this.http.post(BASE_URL+'login', loginRequest)
  }

  logout(): void {
    // Perform any necessary cleanup or token removal here
    localStorage.removeItem('jwt'); // For example, if you store the token in localStorage
  }
 
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(BASE_URL + 'e/employee');
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.http.post(BASE_URL + 'e/employee', employee); 
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(BASE_URL + `e/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(BASE_URL + `e/employee/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(BASE_URL + `e/employee/${id}`);
  }
}
