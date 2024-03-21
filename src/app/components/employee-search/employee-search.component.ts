import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  
  query: string = '';
  searchResults: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.query.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.employeeService.searchEmployees(this.query).subscribe(
      (employees: Employee[]) => {
        this.searchResults = employees;
      },
      (error: any) => {
        console.error('Error searching employees:', error);
      }
    );
  }

}
