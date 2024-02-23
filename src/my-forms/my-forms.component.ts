import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="showName()">
      <input type="text" formControlName="name" name="name" required/>
      <input type="password" formControlName="password" name="password" required />
      <input type="submit" value="Submit" />
    </form>
    <p>{{ registrationForm.value.name }}</p>
    <p>{{registrationForm.value.password}}</p>
  `,
  styles: `
  p {
    background-color: red;
    color: white;
    font-weight: bold;
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

  // Switching over to using FormGroups
  registrationForm = new FormGroup({
    name: new FormControl('Olusola'),
    password: new FormControl(''),
  });
  showName() {
    alert(this.registrationForm.value.name + '  ' + this.registrationForm.value.password);
  }
}
