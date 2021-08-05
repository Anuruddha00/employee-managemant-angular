import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService:EmployeeService , private router:Router) { }

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee() {
    this.employeeService.getEmployee().subscribe(data=>{
      this.employees=data;
    })
  }

  private updateEmlpoyee(employeeId:number) {
    this.router.navigate(['updated-employee' , employeeId]);
  }

  private deleteEmployee(employeeId:number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(data=>{
      this.getEmployee();
    })
  }

  public onOpenModel(employee: Employee, mode: String): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle' , 'modal');
    if(mode === 'add') {
      button.setAttribute('data-toggle' , '#addEmployeeModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-toggle' , '#deleteEmployeeModal');
    }
    if(mode === 'update') {
      button.setAttribute('data-toggle' , '#updateEmployeeModal');
    }

    container.appendChild(button);
    button.click();
  }



}
