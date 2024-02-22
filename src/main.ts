import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MyFormsComponent } from './my-forms/my-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyFormsComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-my-forms/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
