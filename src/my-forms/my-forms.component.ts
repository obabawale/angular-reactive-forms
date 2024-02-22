import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form (submit)="showName()">
      <input type="text" [formControl]="name" required/>
      <input type="password" [formControl]="password" name="password" required>
      <input type="submit" value="Submit"  />
    </form>
    <p>{{name.value}}</p>
    <p>{{password.value}}</p>
  `,
  styles: `
  p {
    background-color: red;
  }
  p input {
    padding: 10px;
    margin: 10px;
  }
  span {
    display: block;
  }
  input.ng-valid {
    background-color: #00ff00;
    color: #000000;
  }
  input.ng-invalid {
    background-color: #e08282;
    color: #fff;
  }
  input[type='submit'] {
    background-color: #b4b4b4;
    color: #fff;
  }
  input[type='submit']:disabled {
    background-color: #b4b4b4;
    color: #000;
  }
  `,
})
export class MyFormsComponent {
  name = new FormControl('Olusola');
  password = new FormControl('');
  showName() {
    alert(this.name.value + '  ' + this.password.value);
  }
}
