import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppService } from '../services/appService';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  credentials!: FormGroup;
  createAccount!: FormGroup;
  isLogin = true;

  constructor(
    private fb: FormBuilder, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private appService: AppService, 
    private router: Router
  ){}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit(): void {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.createAccount = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  changeLogin() {
    this.isLogin = !this.isLogin;
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.createAccount.valid) {
      console.log('Register')
      const email = this.createAccount.get('email')?.value;
      const password = this.createAccount.get('password')?.value;
      console.log('Register - Email:', email, 'Password:', password); // Depuração
      if (email && password) {
        try {
          const success = await this.appService.registerUser(email, password);
          await loading.dismiss();
          if (success) {
            this.router.navigateByUrl('/tabs/tab1');
          } else {
            this.showAlert('Registration failed', 'Unable to register. Please try again.');
          }
        } catch (error) {
          await loading.dismiss();
          this.showAlert('Registration failed', 'An unexpected error occurred. Please try again.');
        }
      } else {
        await loading.dismiss();
        this.showAlert('Invalid input', 'Please provide valid email and password.');
      }
    } else {
      await loading.dismiss();
      this.showAlert('Invalid input', 'Please provide valid email and password.');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    if (this.credentials.valid) {
      const email = this.credentials.get('email')?.value;
      const password = this.credentials.get('password')?.value;
      console.log('Login - Email:', email, 'Password:', password); // Depuração
      if (email && password) {
        try {
          const success = await this.appService.loginUser(email, password);
          await loading.dismiss();
          if (success) {
            this.router.navigateByUrl('/tabs/tab1');
          } else {
            this.showAlert('Login failed', 'Unable to login. Please check your credentials and try again.');
          }
        } catch (error) {
          await loading.dismiss();
          this.showAlert('Login failed', 'An unexpected error occurred. Please try again.');
        }
      } else {
        await loading.dismiss();
        this.showAlert('Invalid input', 'Please provide valid email and password.');
      }
    } else {
      await loading.dismiss();
      this.showAlert('Invalid input', 'Please provide valid email and password.');
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
