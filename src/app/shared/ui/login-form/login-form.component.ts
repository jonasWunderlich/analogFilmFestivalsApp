import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule],
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm?: NgForm;
  formData = {
    username: '',
    password: '',
  };

  submitForm() {
    this.loginForm?.reset();
  }
}
