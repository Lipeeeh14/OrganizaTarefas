import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormBuilder().group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log('User logged in:', this.loginForm.value);
      this.router.navigate(['/tarefas']);
    } else {
      console.log('Form is invalid');
    }    
  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
