import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  newEmployee: Employee = {
    employeeLastName: '',
    employeeFirstName: '',
    employeePhone: '',
    employeeZip: '',
    hireDate: '',
    employeeId: 0
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (employees: Employee[]) => {
        console.log(employees);
        this.employees = employees;
      },
      (error: any) => {
        console.error('Error loading employees:', error);
      }
    );
  }

  onSubmit(form: NgForm): void {
    this.employeeService.createEmployee(this.newEmployee).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
        // Aquí podrías redirigir al usuario a la lista de empleados u otra página de tu aplicación
        alert('Employee created successfully!');
        form.resetForm();
    // Restablecer el objeto newEmployee
      this.newEmployee = {
      employeeId: 0,
      employeeLastName: '',
      employeeFirstName: '',
      employeePhone: '',
      employeeZip: '',
      hireDate: ''
    };
      },
      (error) => {
        console.error('Error creating employee:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
  }

}
