import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'https://localhost:7165';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/employees/${employee.employeeId}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/employees/${id}`);
  }

  searchEmployees(query: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees/search?param=${query}`);
  }
}
