import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import 'zone.js';
import { LoginComponent } from './app/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Beginner Level {{ name }}!</h1>
    <app-login>This is Child Component </app-login>
  `,
  imports: [LoginComponent],
})
export class App {
  name = 'Reactive Form';
}

bootstrapApplication(App);
