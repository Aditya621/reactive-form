import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public login_form!: FormGroup;
  public showResponse = false;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.login_form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submitLoginForm() {
    this.showResponse = true;
  }

  public resetForm() {
    this.login_form.reset();
  }
}
