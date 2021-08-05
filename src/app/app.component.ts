import { Component } from '@angular/core';
import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employee : Employee[];
  
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
