import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result = '';

  handleInput(input: string) {
    if (input === 'C') {
      this.result = '';
    } else {
      this.result += input;
    }
  }

  calculate() {
    try {
      this.result = eval(this.result);
    } catch (e) {
      this.result = 'Error';
    }
  }
}
