import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons: string[];
  operation: string;
  result: string;

  constructor() {
    this.buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
    this.operation = '';
  }

  ngOnInit() {
  }

  addValue(value) {
    if (value === '=') {
      try {
        // tslint:disable-next-line:no-eval
        this.result = eval(this.operation);
        this.operation = this.result.toString();
      } catch (error) {
        console.error(error);
        this.operation = '';
      }
    } else if (value === 'C') {
      this.operation = '';
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      const lastChar = this.operation.substr(this.operation.length - 1);
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        (console.log('do nothing'));
      } else {
        this.operation += value;
      }
    } else {
      this.operation += value;
    }
  }
}
