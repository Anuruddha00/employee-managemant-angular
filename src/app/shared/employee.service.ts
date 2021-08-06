import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:8080/api/v1/employee";

  constructor(private httpClient : HttpClient) { }

  public getEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/all`)
  }

  public addEmployee(employee:Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.baseUrl}/add`,employee)
  }

  public updateEmployee(employee:Employee): Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseUrl}/update`,employee)
  }

  public deleteEmployee(employeeId:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${employeeId}`)
  }

  
}
