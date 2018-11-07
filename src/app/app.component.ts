import { Component, OnInit } from '@angular/core';

class Employee {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  employee: Employee[];
  empSelected: number;
  modifiedText: string;

  ngOnInit() {
    this.employee = [
      { id: 1, name: 'Alex' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Robert' },
      { id: 4, name: 'Harry' }
    ];
    this.empSelected = 4;
  }

  onEmployeeSelected(val: any) {
    this.customFunction(val);
  }

  customFunction(val: any) {
    this.modifiedText = 'The value' + val + 'was selected';
  }


}
