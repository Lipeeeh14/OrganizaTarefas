import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private router: Router) {
    this.registerForm = new FormBuilder().group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/)]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log('User registered:', this.registerForm.value);
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
